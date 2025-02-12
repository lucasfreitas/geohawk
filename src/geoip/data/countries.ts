import { CountryData } from '../interfaces/country-data.interface';

// North America
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
  }
};

// South America
export const southAmerica: Record<string, CountryData> = {
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
    is_in_european_union: false,
    tlds: ['.br', '.com.br', '.net.br', '.org.br', '.gov.br', '.edu.br']
  },
  AR: {
    currencies: [{
      symbol: 'AR$',
      name: 'Argentine Peso',
      name_native: 'Peso Argentino',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'ARS',
      name_plural: 'Argentine pesos',
      type: 'fiat'
    }],
    emoji: '🇦🇷',
    languages: [{
      name: 'Spanish',
      name_native: 'Español'
    }],
    timezones: ['America/Argentina/Buenos_Aires'],
    is_in_european_union: false,
    tlds: ['.ar']
  },
  CL: {
    currencies: [{
      symbol: 'CL$',
      name: 'Chilean Peso',
      name_native: 'Peso Chileno',
      symbol_native: '$',
      decimal_digits: 0,
      rounding: 0,
      code: 'CLP',
      name_plural: 'Chilean pesos',
      type: 'fiat'
    }],
    emoji: '🇨🇱',
    languages: [{
      name: 'Spanish',
      name_native: 'Español'
    }],
    timezones: ['America/Santiago', 'Pacific/Easter'],
    is_in_european_union: false,
    tlds: ['.cl']
  }
};

// Europe
export const europe: Record<string, CountryData> = {
  GB: {
    currencies: [{
      symbol: '£',
      name: 'British Pound',
      name_native: 'British Pound',
      symbol_native: '£',
      decimal_digits: 2,
      rounding: 0,
      code: 'GBP',
      name_plural: 'British pounds',
      type: 'fiat'
    }],
    emoji: '🇬🇧',
    languages: [{
      name: 'English',
      name_native: 'English'
    }],
    timezones: ['Europe/London'],
    is_in_european_union: false,
    tlds: ['.uk', '.co.uk', '.org.uk', '.gov.uk']
  },
  DE: {
    currencies: [{
      symbol: '€',
      name: 'Euro',
      name_native: 'Euro',
      symbol_native: '€',
      decimal_digits: 2,
      rounding: 0,
      code: 'EUR',
      name_plural: 'euros',
      type: 'fiat'
    }],
    emoji: '🇩🇪',
    languages: [{
      name: 'German',
      name_native: 'Deutsch'
    }],
    timezones: ['Europe/Berlin', 'Europe/Busingen'],
    is_in_european_union: true,
    tlds: ['.de']
  },
  FR: {
    currencies: [{
      symbol: '€',
      name: 'Euro',
      name_native: 'Euro',
      symbol_native: '€',
      decimal_digits: 2,
      rounding: 0,
      code: 'EUR',
      name_plural: 'euros',
      type: 'fiat'
    }],
    emoji: '🇫🇷',
    languages: [{
      name: 'French',
      name_native: 'Français'
    }],
    timezones: ['Europe/Paris'],
    is_in_european_union: true,
    tlds: ['.fr']
  }
};

// Asia
export const asia: Record<string, CountryData> = {
  JP: {
    currencies: [{
      symbol: '¥',
      name: 'Japanese Yen',
      name_native: '円',
      symbol_native: '¥',
      decimal_digits: 0,
      rounding: 0,
      code: 'JPY',
      name_plural: 'Japanese yen',
      type: 'fiat'
    }],
    emoji: '🇯🇵',
    languages: [{
      name: 'Japanese',
      name_native: '日本語'
    }],
    timezones: ['Asia/Tokyo'],
    is_in_european_union: false,
    tlds: ['.jp']
  },
  CN: {
    currencies: [{
      symbol: 'CN¥',
      name: 'Chinese Yuan',
      name_native: '人民币',
      symbol_native: '¥',
      decimal_digits: 2,
      rounding: 0,
      code: 'CNY',
      name_plural: 'Chinese yuan',
      type: 'fiat'
    }],
    emoji: '🇨🇳',
    languages: [{
      name: 'Chinese',
      name_native: '中文'
    }],
    timezones: ['Asia/Shanghai', 'Asia/Urumqi'],
    is_in_european_union: false,
    tlds: ['.cn', '.中国']
  },
  IN: {
    currencies: [{
      symbol: '₹',
      name: 'Indian Rupee',
      name_native: 'भारतीय रुपया',
      symbol_native: '₹',
      decimal_digits: 2,
      rounding: 0,
      code: 'INR',
      name_plural: 'Indian rupees',
      type: 'fiat'
    }],
    emoji: '🇮🇳',
    languages: [
      {
        name: 'Hindi',
        name_native: 'हिन्दी'
      },
      {
        name: 'English',
        name_native: 'English'
      }
    ],
    timezones: ['Asia/Kolkata'],
    is_in_european_union: false,
    tlds: ['.in']
  }
};

// Oceania
export const oceania: Record<string, CountryData> = {
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
    is_in_european_union: false,
    tlds: ['.au', '.com.au', '.net.au', '.org.au', '.edu.au', '.gov.au']
  },
  NZ: {
    currencies: [{
      symbol: 'NZ$',
      name: 'New Zealand Dollar',
      name_native: 'New Zealand Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'NZD',
      name_plural: 'New Zealand dollars',
      type: 'fiat'
    }],
    emoji: '🇳🇿',
    languages: [
      {
        name: 'English',
        name_native: 'English'
      },
      {
        name: 'Maori',
        name_native: 'Te Reo Māori'
      }
    ],
    timezones: ['Pacific/Auckland', 'Pacific/Chatham'],
    is_in_european_union: false,
    tlds: ['.nz']
  }
};

// Africa
export const africa: Record<string, CountryData> = {
  ZA: {
    currencies: [{
      symbol: 'R',
      name: 'South African Rand',
      name_native: 'Rand',
      symbol_native: 'R',
      decimal_digits: 2,
      rounding: 0,
      code: 'ZAR',
      name_plural: 'South African rand',
      type: 'fiat'
    }],
    emoji: '🇿🇦',
    languages: [
      {
        name: 'English',
        name_native: 'English'
      },
      {
        name: 'Afrikaans',
        name_native: 'Afrikaans'
      },
      {
        name: 'Zulu',
        name_native: 'isiZulu'
      }
    ],
    timezones: ['Africa/Johannesburg'],
    is_in_european_union: false,
    tlds: ['.za']
  },
  EG: {
    currencies: [{
      symbol: 'E£',
      name: 'Egyptian Pound',
      name_native: 'جنيه مصري',
      symbol_native: 'ج.م',
      decimal_digits: 2,
      rounding: 0,
      code: 'EGP',
      name_plural: 'Egyptian pounds',
      type: 'fiat'
    }],
    emoji: '🇪🇬',
    languages: [{
      name: 'Arabic',
      name_native: 'العربية'
    }],
    timezones: ['Africa/Cairo'],
    is_in_european_union: false,
    tlds: ['.eg', '.مصر']
  }
};

// Combine all regions
export const allCountries: Record<string, CountryData> = {
  ...northAmerica,
  ...southAmerica,
  ...europe,
  ...asia,
  ...oceania,
  ...africa
};
