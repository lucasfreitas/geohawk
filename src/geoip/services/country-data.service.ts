import { Injectable } from '@nestjs/common';
import { CountryData } from '../interfaces/country-data.interface';
import { allCountries } from '../data/regions';

/**
 * Service for retrieving country-specific data including:
 * - Currencies with native names and symbols
 * - Languages with native names
 * - Timezones
 * - Country flag emojis
 * - TLDs (Top Level Domains)
 * - European Union membership status
 * 
 * Currently supports 68 countries across:
 * - North America (12 countries)
 * - South America (12 countries)
 * - Europe (15 countries)
 * - Asia (12 countries)
 * - Africa (10 countries)
 * - Oceania (7 countries)
 * 
 * Data includes:
 * - Major economies (G20 countries)
 * - Regional economic leaders
 * - Countries with significant internet infrastructure
 * - Countries with diverse currency systems
 */
@Injectable()
export class CountryDataService {
  private readonly countryData: Record<string, CountryData>;

  constructor() {
    this.countryData = allCountries;
  }

  /**
   * Get comprehensive data for a specific country
   * @param countryCode ISO 3166-1 alpha-2 country code (e.g., 'US', 'GB', 'JP')
   * @returns CountryData object containing currencies, languages, timezones, etc.
   */
  getCountryData(countryCode: string): CountryData | null {
    if (!countryCode) return null;
    return this.countryData[countryCode.toUpperCase()] || null;
  }

  /**
   * Get flag emoji for a country
   * @param countryCode ISO 3166-1 alpha-2 country code
   * @returns Unicode flag emoji for the country
   */
  getFlagEmoji(countryCode: string): string {
    if (!countryCode) return '';
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }

  /**
   * Check if a country code is supported
   * @param countryCode ISO 3166-1 alpha-2 country code
   * @returns boolean indicating if country data is available
   */
  isCountrySupported(countryCode: string): boolean {
    if (!countryCode) return false;
    return countryCode.toUpperCase() in this.countryData;
  }

  /**
   * Get list of all supported country codes
   * @returns Array of supported ISO 3166-1 alpha-2 country codes
   */
  getSupportedCountries(): string[] {
    return Object.keys(this.countryData);
  }
}
