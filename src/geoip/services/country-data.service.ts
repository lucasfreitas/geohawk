import { Injectable } from '@nestjs/common';
import { CountryData, Currency, Language } from '../interfaces/country-data.interface';

@Injectable()
export class CountryDataService {
  private readonly countryData: Record<string, CountryData> = {
    // Example data for a few countries
    US: {
      currencies: [{
        symbol: '$',
        name: 'US Dollar',
        name_native: 'US Dollar',
        symbol_native: '$',
        decimal_digits: 2,
        rounding: 0,
        code: 'USD',
        name_plural: 'US dollars',
        type: 'fiat'
      }],
      emoji: '🇺🇸',
      languages: [{
        name: 'English',
        name_native: 'English'
      }]
    },
    BR: {
      currencies: [{
        symbol: 'R$',
        name: 'Brazilian Real',
        name_native: 'Real Brasileiro',
        symbol_native: 'R$',
        decimal_digits: 2,
        rounding: 0,
        code: 'BRL',
        name_plural: 'Brazilian reais',
        type: 'fiat'
      }],
      emoji: '🇧🇷',
      languages: [{
        name: 'Portuguese',
        name_native: 'Português'
      }]
    },
    AU: {
      currencies: [{
        symbol: 'AU$',
        name: 'Australian Dollar',
        name_native: 'Australian Dollar',
        symbol_native: '$',
        decimal_digits: 2,
        rounding: 0,
        code: 'AUD',
        name_plural: 'Australian dollars',
        type: 'fiat'
      }],
      emoji: '🇦🇺',
      languages: [{
        name: 'English',
        name_native: 'English'
      }]
    },
    // Add more countries as needed
  };

  getCountryData(countryCode: string): CountryData | null {
    if (!countryCode) return null;
    return this.countryData[countryCode.toUpperCase()] || null;
  }

  // Helper method to get flag emoji from country code
  getFlagEmoji(countryCode: string): string {
    if (!countryCode) return '';
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }
}
