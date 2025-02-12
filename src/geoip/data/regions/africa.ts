import { CountryData } from '../../interfaces/country-data.interface';

export const africa: Record<string, CountryData> = {
  // North Africa
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
  },
  MA: {
    currencies: [{
      symbol: 'MAD',
      name: 'Moroccan Dirham',
      name_native: 'درهم مغربي',
      symbol_native: 'د.م.',
      decimal_digits: 2,
      rounding: 0,
      code: 'MAD',
      name_plural: 'Moroccan dirhams',
      type: 'fiat'
    }],
    emoji: '🇲🇦',
    languages: [
      {
        name: 'Arabic',
        name_native: 'العربية'
      },
      {
        name: 'Berber',
        name_native: 'ⵜⴰⵎⴰⵣⵉⵖⵜ'
      }
    ],
    timezones: ['Africa/Casablanca'],
    is_in_european_union: false,
    tlds: ['.ma', '.المغرب']
  },
  TN: {
    currencies: [{
      symbol: 'DT',
      name: 'Tunisian Dinar',
      name_native: 'دينار تونسي',
      symbol_native: 'د.ت',
      decimal_digits: 3,
      rounding: 0,
      code: 'TND',
      name_plural: 'Tunisian dinars',
      type: 'fiat'
    }],
    emoji: '🇹🇳',
    languages: [{
      name: 'Arabic',
      name_native: 'العربية'
    }],
    timezones: ['Africa/Tunis'],
    is_in_european_union: false,
    tlds: ['.tn']
  },
  DZ: {
    currencies: [{
      symbol: 'DA',
      name: 'Algerian Dinar',
      name_native: 'دينار جزائري',
      symbol_native: 'د.ج',
      decimal_digits: 2,
      rounding: 0,
      code: 'DZD',
      name_plural: 'Algerian dinars',
      type: 'fiat'
    }],
    emoji: '🇩🇿',
    languages: [{
      name: 'Arabic',
      name_native: 'العربية'
    }],
    timezones: ['Africa/Algiers'],
    is_in_european_union: false,
    tlds: ['.dz', '.الجزائر']
  },
  LY: {
    currencies: [{
      symbol: 'LD',
      name: 'Libyan Dinar',
      name_native: 'دينار ليبي',
      symbol_native: 'د.ل',
      decimal_digits: 3,
      rounding: 0,
      code: 'LYD',
      name_plural: 'Libyan dinars',
      type: 'fiat'
    }],
    emoji: '🇱🇾',
    languages: [{
      name: 'Arabic',
      name_native: 'العربية'
    }],
    timezones: ['Africa/Tripoli'],
    is_in_european_union: false,
    tlds: ['.ly']
  },
  // West Africa
  NG: {
    currencies: [{
      symbol: '₦',
      name: 'Nigerian Naira',
      name_native: 'Naira',
      symbol_native: '₦',
      decimal_digits: 2,
      rounding: 0,
      code: 'NGN',
      name_plural: 'Nigerian nairas',
      type: 'fiat'
    }],
    emoji: '🇳🇬',
    languages: [{
      name: 'English',
      name_native: 'English'
    }],
    timezones: ['Africa/Lagos'],
    is_in_european_union: false,
    tlds: ['.ng']
  },
  GH: {
    currencies: [{
      symbol: 'GH₵',
      name: 'Ghanaian Cedi',
      name_native: 'Ghana Cedi',
      symbol_native: 'GH₵',
      decimal_digits: 2,
      rounding: 0,
      code: 'GHS',
      name_plural: 'Ghanaian cedis',
      type: 'fiat'
    }],
    emoji: '🇬🇭',
    languages: [{
      name: 'English',
      name_native: 'English'
    }],
    timezones: ['Africa/Accra'],
    is_in_european_union: false,
    tlds: ['.gh']
  },
  SN: {
    currencies: [{
      symbol: 'CFA',
      name: 'West African CFA Franc',
      name_native: 'Franc CFA',
      symbol_native: 'CFA',
      decimal_digits: 0,
      rounding: 0,
      code: 'XOF',
      name_plural: 'West African CFA francs',
      type: 'fiat'
    }],
    emoji: '🇸🇳',
    languages: [{
      name: 'French',
      name_native: 'Français'
    }],
    timezones: ['Africa/Dakar'],
    is_in_european_union: false,
    tlds: ['.sn']
  },
  CI: {
    currencies: [{
      symbol: 'CFA',
      name: 'West African CFA Franc',
      name_native: 'Franc CFA',
      symbol_native: 'CFA',
      decimal_digits: 0,
      rounding: 0,
      code: 'XOF',
      name_plural: 'West African CFA francs',
      type: 'fiat'
    }],
    emoji: '🇨🇮',
    languages: [{
      name: 'French',
      name_native: 'Français'
    }],
    timezones: ['Africa/Abidjan'],
    is_in_european_union: false,
    tlds: ['.ci']
  },
  // East Africa
  KE: {
    currencies: [{
      symbol: 'KSh',
      name: 'Kenyan Shilling',
      name_native: 'Shilingi ya Kenya',
      symbol_native: 'KSh',
      decimal_digits: 2,
      rounding: 0,
      code: 'KES',
      name_plural: 'Kenyan shillings',
      type: 'fiat'
    }],
    emoji: '🇰🇪',
    languages: [
      {
        name: 'English',
        name_native: 'English'
      },
      {
        name: 'Swahili',
        name_native: 'Kiswahili'
      }
    ],
    timezones: ['Africa/Nairobi'],
    is_in_european_union: false,
    tlds: ['.ke']
  },
  ET: {
    currencies: [{
      symbol: 'Br',
      name: 'Ethiopian Birr',
      name_native: 'የኢትዮጵያ ብር',
      symbol_native: 'Br',
      decimal_digits: 2,
      rounding: 0,
      code: 'ETB',
      name_plural: 'Ethiopian birrs',
      type: 'fiat'
    }],
    emoji: '🇪🇹',
    languages: [{
      name: 'Amharic',
      name_native: 'አማርኛ'
    }],
    timezones: ['Africa/Addis_Ababa'],
    is_in_european_union: false,
    tlds: ['.et']
  },
  TZ: {
    currencies: [{
      symbol: 'TSh',
      name: 'Tanzanian Shilling',
      name_native: 'Shilingi ya Tanzania',
      symbol_native: 'TSh',
      decimal_digits: 2,
      rounding: 0,
      code: 'TZS',
      name_plural: 'Tanzanian shillings',
      type: 'fiat'
    }],
    emoji: '🇹🇿',
    languages: [
      {
        name: 'Swahili',
        name_native: 'Kiswahili'
      },
      {
        name: 'English',
        name_native: 'English'
      }
    ],
    timezones: ['Africa/Dar_es_Salaam'],
    is_in_european_union: false,
    tlds: ['.tz']
  },
  UG: {
    currencies: [{
      symbol: 'USh',
      name: 'Ugandan Shilling',
      name_native: 'Shilingi ya Uganda',
      symbol_native: 'USh',
      decimal_digits: 0,
      rounding: 0,
      code: 'UGX',
      name_plural: 'Ugandan shillings',
      type: 'fiat'
    }],
    emoji: '🇺🇬',
    languages: [
      {
        name: 'English',
        name_native: 'English'
      },
      {
        name: 'Swahili',
        name_native: 'Kiswahili'
      }
    ],
    timezones: ['Africa/Kampala'],
    is_in_european_union: false,
    tlds: ['.ug']
  },
  // Southern Africa
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
  NA: {
    currencies: [{
      symbol: 'N$',
      name: 'Namibian Dollar',
      name_native: 'Namibian Dollar',
      symbol_native: 'N$',
      decimal_digits: 2,
      rounding: 0,
      code: 'NAD',
      name_plural: 'Namibian dollars',
      type: 'fiat'
    }],
    emoji: '🇳🇦',
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
        name: 'German',
        name_native: 'Deutsch'
      }
    ],
    timezones: ['Africa/Windhoek'],
    is_in_european_union: false,
    tlds: ['.na']
  },
  BW: {
    currencies: [{
      symbol: 'P',
      name: 'Botswana Pula',
      name_native: 'Pula',
      symbol_native: 'P',
      decimal_digits: 2,
      rounding: 0,
      code: 'BWP',
      name_plural: 'Botswana pulas',
      type: 'fiat'
    }],
    emoji: '🇧🇼',
    languages: [
      {
        name: 'English',
        name_native: 'English'
      },
      {
        name: 'Tswana',
        name_native: 'Setswana'
      }
    ],
    timezones: ['Africa/Gaborone'],
    is_in_european_union: false,
    tlds: ['.bw']
  },
  ZM: {
    currencies: [{
      symbol: 'ZK',
      name: 'Zambian Kwacha',
      name_native: 'Zambian Kwacha',
      symbol_native: 'ZK',
      decimal_digits: 2,
      rounding: 0,
      code: 'ZMW',
      name_plural: 'Zambian kwachas',
      type: 'fiat'
    }],
    emoji: '🇿🇲',
    languages: [{
      name: 'English',
      name_native: 'English'
    }],
    timezones: ['Africa/Lusaka'],
    is_in_european_union: false,
    tlds: ['.zm']
  },
  ZW: {
    currencies: [{
      symbol: 'US$',
      name: 'US Dollar',
      name_native: 'US Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'USD',
      name_plural: 'US dollars',
      type: 'fiat'
    }],
    emoji: '🇿🇼',
    languages: [
      {
        name: 'English',
        name_native: 'English'
      },
      {
        name: 'Shona',
        name_native: 'chiShona'
      },
      {
        name: 'Ndebele',
        name_native: 'isiNdebele'
      }
    ],
    timezones: ['Africa/Harare'],
    is_in_european_union: false,
    tlds: ['.zw']
  }
};
