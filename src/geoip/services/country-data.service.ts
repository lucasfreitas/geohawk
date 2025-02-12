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
      }],
      timezones: [
        'America/New_York',
        'America/Detroit',
        'America/Kentucky/Louisville',
        'America/Kentucky/Monticello',
        'America/Indiana/Indianapolis',
        'America/Indiana/Vincennes',
        'America/Indiana/Winamac',
        'America/Indiana/Marengo',
        'America/Indiana/Petersburg',
        'America/Indiana/Vevay',
        'America/Chicago',
        'America/Indiana/Tell_City',
        'America/Indiana/Knox',
        'America/Menominee',
        'America/North_Dakota/Center',
        'America/North_Dakota/New_Salem',
        'America/North_Dakota/Beulah',
        'America/Denver',
        'America/Boise',
        'America/Phoenix',
        'America/Los_Angeles',
        'America/Anchorage',
        'America/Juneau',
        'America/Sitka',
        'America/Metlakatla',
        'America/Yakutat',
        'America/Nome',
        'America/Adak',
        'Pacific/Honolulu'
      ],
      is_in_european_union: false
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
      }],
      timezones: [
        'America/Noronha',
        'America/Belem',
        'America/Fortaleza',
        'America/Recife',
        'America/Araguaina',
        'America/Maceio',
        'America/Bahia',
        'America/Sao_Paulo',
        'America/Campo_Grande',
        'America/Cuiaba',
        'America/Santarem',
        'America/Porto_Velho',
        'America/Boa_Vista',
        'America/Manaus',
        'America/Eirunepe',
        'America/Rio_Branco'
      ],
      is_in_european_union: false
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
      }],
      timezones: [
        'Australia/Lord_Howe',
        'Antarctica/Macquarie',
        'Australia/Hobart',
        'Australia/Currie',
        'Australia/Melbourne',
        'Australia/Sydney',
        'Australia/Broken_Hill',
        'Australia/Brisbane',
        'Australia/Lindeman',
        'Australia/Adelaide',
        'Australia/Darwin',
        'Australia/Perth',
        'Australia/Eucla'
      ],
      is_in_european_union: false
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
