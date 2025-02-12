import { CountryData } from '../../interfaces/country-data.interface';

export const northAmerica: Record<string, CountryData> = {
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
    is_in_european_union: false,
    tlds: ['.us', '.edu', '.gov', '.mil']
  },
  CA: {
    currencies: [{
      symbol: 'CA$',
      name: 'Canadian Dollar',
      name_native: 'Dollar canadien',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'CAD',
      name_plural: 'Canadian dollars',
      type: 'fiat'
    }],
    emoji: '🇨🇦',
    languages: [
      {
        name: 'English',
        name_native: 'English'
      },
      {
        name: 'French',
        name_native: 'Français'
      }
    ],
    timezones: [
      'America/St_Johns',
      'America/Halifax',
      'America/Glace_Bay',
      'America/Moncton',
      'America/Goose_Bay',
      'America/Toronto',
      'America/Nipigon',
      'America/Thunder_Bay',
      'America/Iqaluit',
      'America/Pangnirtung',
      'America/Winnipeg',
      'America/Rainy_River',
      'America/Resolute',
      'America/Rankin_Inlet',
      'America/Regina',
      'America/Swift_Current',
      'America/Edmonton',
      'America/Cambridge_Bay',
      'America/Yellowknife',
      'America/Inuvik',
      'America/Dawson_Creek',
      'America/Fort_Nelson',
      'America/Whitehorse',
      'America/Dawson',
      'America/Vancouver',
      'America/Creston'
    ],
    is_in_european_union: false,
    tlds: ['.ca']
  },
  MX: {
    currencies: [{
      symbol: 'MX$',
      name: 'Mexican Peso',
      name_native: 'Peso Mexicano',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'MXN',
      name_plural: 'Mexican pesos',
      type: 'fiat'
    }],
    emoji: '🇲🇽',
    languages: [{
      name: 'Spanish',
      name_native: 'Español'
    }],
    timezones: [
      'America/Mexico_City',
      'America/Cancun',
      'America/Merida',
      'America/Monterrey',
      'America/Matamoros',
      'America/Mazatlan',
      'America/Chihuahua',
      'America/Ojinaga',
      'America/Hermosillo',
      'America/Tijuana',
      'America/Bahia_Banderas'
    ],
    is_in_european_union: false,
    tlds: ['.mx']
  },
  // Caribbean
  CU: {
    currencies: [{
      symbol: 'CUP',
      name: 'Cuban Peso',
      name_native: 'Peso Cubano',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'CUP',
      name_plural: 'Cuban pesos',
      type: 'fiat'
    }],
    emoji: '🇨🇺',
    languages: [{
      name: 'Spanish',
      name_native: 'Español'
    }],
    timezones: ['America/Havana'],
    is_in_european_union: false,
    tlds: ['.cu']
  },
  DO: {
    currencies: [{
      symbol: 'DOP',
      name: 'Dominican Peso',
      name_native: 'Peso Dominicano',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'DOP',
      name_plural: 'Dominican pesos',
      type: 'fiat'
    }],
    emoji: '🇩🇴',
    languages: [{
      name: 'Spanish',
      name_native: 'Español'
    }],
    timezones: ['America/Santo_Domingo'],
    is_in_european_union: false,
    tlds: ['.do']
  },
  HT: {
    currencies: [{
      symbol: 'HTG',
      name: 'Haitian Gourde',
      name_native: 'Gourde Haïtienne',
      symbol_native: 'G',
      decimal_digits: 2,
      rounding: 0,
      code: 'HTG',
      name_plural: 'Haitian gourdes',
      type: 'fiat'
    }],
    emoji: '🇭🇹',
    languages: [
      {
        name: 'French',
        name_native: 'Français'
      },
      {
        name: 'Haitian Creole',
        name_native: 'Kreyòl Ayisyen'
      }
    ],
    timezones: ['America/Port-au-Prince'],
    is_in_european_union: false,
    tlds: ['.ht']
  },
  // Central America
  GT: {
    currencies: [{
      symbol: 'GTQ',
      name: 'Guatemalan Quetzal',
      name_native: 'Quetzal Guatemalteco',
      symbol_native: 'Q',
      decimal_digits: 2,
      rounding: 0,
      code: 'GTQ',
      name_plural: 'Guatemalan quetzales',
      type: 'fiat'
    }],
    emoji: '🇬🇹',
    languages: [{
      name: 'Spanish',
      name_native: 'Español'
    }],
    timezones: ['America/Guatemala'],
    is_in_european_union: false,
    tlds: ['.gt']
  },
  BZ: {
    currencies: [{
      symbol: 'BZD',
      name: 'Belize Dollar',
      name_native: 'Belize Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'BZD',
      name_plural: 'Belize dollars',
      type: 'fiat'
    }],
    emoji: '🇧🇿',
    languages: [{
      name: 'English',
      name_native: 'English'
    }],
    timezones: ['America/Belize'],
    is_in_european_union: false,
    tlds: ['.bz']
  },
  SV: {
    currencies: [{
      symbol: '$',
      name: 'US Dollar',
      name_native: 'Dólar Estadounidense',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'USD',
      name_plural: 'US dollars',
      type: 'fiat'
    }],
    emoji: '🇸🇻',
    languages: [{
      name: 'Spanish',
      name_native: 'Español'
    }],
    timezones: ['America/El_Salvador'],
    is_in_european_union: false,
    tlds: ['.sv']
  },
  HN: {
    currencies: [{
      symbol: 'HNL',
      name: 'Honduran Lempira',
      name_native: 'Lempira Hondureño',
      symbol_native: 'L',
      decimal_digits: 2,
      rounding: 0,
      code: 'HNL',
      name_plural: 'Honduran lempiras',
      type: 'fiat'
    }],
    emoji: '🇭🇳',
    languages: [{
      name: 'Spanish',
      name_native: 'Español'
    }],
    timezones: ['America/Tegucigalpa'],
    is_in_european_union: false,
    tlds: ['.hn']
  },
  NI: {
    currencies: [{
      symbol: 'NIO',
      name: 'Nicaraguan Córdoba',
      name_native: 'Córdoba Nicaragüense',
      symbol_native: 'C$',
      decimal_digits: 2,
      rounding: 0,
      code: 'NIO',
      name_plural: 'Nicaraguan córdobas',
      type: 'fiat'
    }],
    emoji: '🇳🇮',
    languages: [{
      name: 'Spanish',
      name_native: 'Español'
    }],
    timezones: ['America/Managua'],
    is_in_european_union: false,
    tlds: ['.ni']
  },
  CR: {
    currencies: [{
      symbol: 'CRC',
      name: 'Costa Rican Colón',
      name_native: 'Colón Costarricense',
      symbol_native: '₡',
      decimal_digits: 2,
      rounding: 0,
      code: 'CRC',
      name_plural: 'Costa Rican colones',
      type: 'fiat'
    }],
    emoji: '🇨🇷',
    languages: [{
      name: 'Spanish',
      name_native: 'Español'
    }],
    timezones: ['America/Costa_Rica'],
    is_in_european_union: false,
    tlds: ['.cr']
  },
  PA: {
    currencies: [{
      symbol: '$',
      name: 'US Dollar',
      name_native: 'Dólar Estadounidense',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'USD',
      name_plural: 'US dollars',
      type: 'fiat'
    }],
    emoji: '🇵🇦',
    languages: [{
      name: 'Spanish',
      name_native: 'Español'
    }],
    timezones: ['America/Panama'],
    is_in_european_union: false,
    tlds: ['.pa']
  }
};
