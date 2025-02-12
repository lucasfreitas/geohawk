import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { promises as fs } from 'fs';
import { join } from 'path';
import * as net from 'net';
import * as maxmind from '@maxmind/geoip2-node';
import { CountryDataService } from './services/country-data.service';
import { GeoIpResponseDto } from './dto/lookup-ip.dto';

@Injectable()
export class GeoipService implements OnModuleInit {
  private cityReader: any;
  private countryReader: any;
  private asnReader: any;

  constructor(
    private configService: ConfigService,
    private countryDataService: CountryDataService
  ) {}

  async onModuleInit() {
    try {
      const cityBuffer = await fs.readFile(join(process.cwd(), 'geoip-bases', 'GeoLite2-City.mmdb'));
      const countryBuffer = await fs.readFile(join(process.cwd(), 'geoip-bases', 'GeoLite2-Country.mmdb'));
      const asnBuffer = await fs.readFile(join(process.cwd(), 'geoip-bases', 'GeoLite2-ASN.mmdb'));

      this.cityReader = await maxmind.Reader.openBuffer(cityBuffer);
      this.countryReader = await maxmind.Reader.openBuffer(countryBuffer);
      this.asnReader = await maxmind.Reader.openBuffer(asnBuffer);
    } catch (error) {
      console.error('Failed to load GeoIP databases:', error);
      throw error;
    }
  }

  private getIpType(ip: string): 'ipv4' | 'ipv6' {
    return net.isIPv4(ip) ? 'ipv4' : 'ipv6';
  }

  async lookupIp(ip: string): Promise<GeoIpResponseDto> {
    try {
      if (!net.isIP(ip)) {
        throw new Error('Invalid IP address');
      }

      const response: GeoIpResponseDto = {
        ip,
        type: this.getIpType(ip)
      };

      try {
        // Try to get data from City database (more detailed)
        const cityData = await this.cityReader.city(ip);
        if (cityData) {
          response.city = cityData.city?.names?.en;
          response.state = cityData.subdivisions?.[0]?.names?.en;
          response.country = cityData.country?.names?.en;
          response.countryCode = cityData.country?.isoCode;
          response.location = {
            latitude: cityData.location?.latitude,
            longitude: cityData.location?.longitude,
            timeZone: cityData.location?.timeZone
          };
          response.network = cityData.traits?.network;

          // Add country-specific data if country code is available
          if (cityData.country?.isoCode) {
            const countryData = this.countryDataService.getCountryData(cityData.country.isoCode);
            if (countryData) {
              response.currencies = countryData.currencies;
              response.emoji = countryData.emoji;
              response.languages = countryData.languages;
              response.timezones = countryData.timezones;
              response.is_in_european_union = countryData.is_in_european_union;
            }
          }
        }
      } catch (error) {
        console.warn(`City lookup failed for IP ${ip}, trying country database...`);
        
        // If failed, try to get at least country data
        try {
          const countryData = await this.countryReader.country(ip);
          if (countryData) {
            response.country = countryData.country?.names?.en;
            response.countryCode = countryData.country?.isoCode;
            response.network = countryData.traits?.network;

            // Add country-specific data if country code is available
            if (countryData.country?.isoCode) {
              const extraData = this.countryDataService.getCountryData(countryData.country.isoCode);
              if (extraData) {
                response.currencies = extraData.currencies;
                response.emoji = extraData.emoji;
                response.languages = extraData.languages;
                response.timezones = extraData.timezones;
                response.is_in_european_union = extraData.is_in_european_union;
              }
            }
          }
        } catch (error) {
          console.warn(`Country lookup failed for IP ${ip}:`, error);
        }
      }

      try {
        // Get ASN data
        const asnData = await this.asnReader.asn(ip);
        if (asnData) {
          response.asn = {
            number: asnData.autonomousSystemNumber,
            organization: asnData.autonomousSystemOrganization
          };
          if (!response.network) {
            response.network = asnData.network;
          }
        }
      } catch (error) {
        console.warn(`ASN lookup failed for IP ${ip}:`, error);
      }

      return response;
    } catch (error) {
      return {
        ip,
        type: this.getIpType(ip),
        error: error.message
      };
    }
  }
}
