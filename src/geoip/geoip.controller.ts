import { Controller, Get, Query, Headers, UnauthorizedException } from '@nestjs/common';
import { GeoipService } from './geoip.service';
import { ConfigService } from '@nestjs/config';

@Controller('geoip')
export class GeoipController {
  constructor(
    private readonly geoipService: GeoipService,
    private readonly configService: ConfigService,
  ) {}

  @Get('lookup')
  async lookupIp(
    @Query('ip') ip: string,
    @Headers('x-api-key') apiKey: string,
  ) {
    // Validar API Key
    const validApiKey = this.configService.get<string>('API_KEY');
    if (!apiKey || apiKey !== validApiKey) {
      throw new UnauthorizedException('Invalid API key');
    }

    return this.geoipService.lookupIp(ip);
  }
}
