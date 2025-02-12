import { CountryData } from '../../interfaces/country-data.interface';

export const asiaPartTwo: Record<string, CountryData> = {
  // More Middle East
  QA: {
    currencies: [{
      symbol: 'QR',
      name: 'Qatari Riyal',
      name_native: 'ريال قطري',
      symbol_native: 'ر.ق',
      decimal_digits: 2,
      rounding: 0,
      code: 'QAR',
      name_plural: 'Qatari riyals',
      type: 'fiat'
    }],
    emoji: '🇶🇦',
    languages: [{
      name: 'Arabic',
      name_native: 'العربية'
    }],
    timezones: ['Asia/Qatar'],
    is_in_european_union: false,
    tlds: ['.qa', '.قطر']
  },
  KW: {
    currencies: [{
      symbol: 'KD',
      name: 'Kuwaiti Dinar',
      name_native: 'دينار كويتي',
      symbol_native: 'د.ك',
      decimal_digits: 3,
      rounding: 0,
      code: 'KWD',
      name_plural: 'Kuwaiti dinars',
      type: 'fiat'
    }],
    emoji: '🇰🇼',
    languages: [{
      name: 'Arabic',
      name_native: 'العربية'
    }],
    timezones: ['Asia/Kuwait'],
    is_in_european_union: false,
    tlds: ['.kw']
  },
  BH: {
    currencies: [{
      symbol: 'BD',
      name: 'Bahraini Dinar',
      name_native: 'دينار بحريني',
      symbol_native: 'د.ب',
      decimal_digits: 3,
      rounding: 0,
      code: 'BHD',
      name_plural: 'Bahraini dinars',
      type: 'fiat'
    }],
    emoji: '🇧🇭',
    languages: [{
      name: 'Arabic',
      name_native: 'العربية'
    }],
    timezones: ['Asia/Bahrain'],
    is_in_european_union: false,
    tlds: ['.bh']
  },
  OM: {
    currencies: [{
      symbol: 'OMR',
      name: 'Omani Rial',
      name_native: 'ريال عماني',
      symbol_native: 'ر.ع.',
      decimal_digits: 3,
      rounding: 0,
      code: 'OMR',
      name_plural: 'Omani rials',
      type: 'fiat'
    }],
    emoji: '🇴🇲',
    languages: [{
      name: 'Arabic',
      name_native: 'العربية'
    }],
    timezones: ['Asia/Muscat'],
    is_in_european_union: false,
    tlds: ['.om', '.عمان']
  },
  // More Central Asia
  UZ: {
    currencies: [{
      symbol: 'soʻm',
      name: 'Uzbekistani Som',
      name_native: 'Ўзбекистон сўм',
      symbol_native: 'сўм',
      decimal_digits: 2,
      rounding: 0,
      code: 'UZS',
      name_plural: 'Uzbekistani som',
      type: 'fiat'
    }],
    emoji: '🇺🇿',
    languages: [
      {
        name: 'Uzbek',
        name_native: 'Oʻzbekcha'
      },
      {
        name: 'Russian',
        name_native: 'Русский'
      }
    ],
    timezones: ['Asia/Tashkent'],
    is_in_european_union: false,
    tlds: ['.uz']
  },
  KG: {
    currencies: [{
      symbol: 'som',
      name: 'Kyrgyzstani Som',
      name_native: 'Кыргыз сом',
      symbol_native: 'сом',
      decimal_digits: 2,
      rounding: 0,
      code: 'KGS',
      name_plural: 'Kyrgyzstani som',
      type: 'fiat'
    }],
    emoji: '🇰🇬',
    languages: [
      {
        name: 'Kyrgyz',
        name_native: 'Кыргызча'
      },
      {
        name: 'Russian',
        name_native: 'Русский'
      }
    ],
    timezones: ['Asia/Bishkek'],
    is_in_european_union: false,
    tlds: ['.kg']
  },
  TJ: {
    currencies: [{
      symbol: 'SM',
      name: 'Tajikistani Somoni',
      name_native: 'Сомонӣ',
      symbol_native: 'SM',
      decimal_digits: 2,
      rounding: 0,
      code: 'TJS',
      name_plural: 'Tajikistani somoni',
      type: 'fiat'
    }],
    emoji: '🇹🇯',
    languages: [
      {
        name: 'Tajik',
        name_native: 'Тоҷикӣ'
      },
      {
        name: 'Russian',
        name_native: 'Русский'
      }
    ],
    timezones: ['Asia/Dushanbe'],
    is_in_european_union: false,
    tlds: ['.tj']
  },
  TM: {
    currencies: [{
      symbol: 'TMT',
      name: 'Turkmenistani Manat',
      name_native: 'Türkmen manat',
      symbol_native: 'TMT',
      decimal_digits: 2,
      rounding: 0,
      code: 'TMT',
      name_plural: 'Turkmenistani manat',
      type: 'fiat'
    }],
    emoji: '🇹🇲',
    languages: [
      {
        name: 'Turkmen',
        name_native: 'Türkmen'
      },
      {
        name: 'Russian',
        name_native: 'Русский'
      }
    ],
    timezones: ['Asia/Ashgabat'],
    is_in_european_union: false,
    tlds: ['.tm']
  },
  // More South Asia
  LK: {
    currencies: [{
      symbol: 'Rs',
      name: 'Sri Lankan Rupee',
      name_native: 'ශ්‍රී ලංකා රුපියල',
      symbol_native: 'රු.',
      decimal_digits: 2,
      rounding: 0,
      code: 'LKR',
      name_plural: 'Sri Lankan rupees',
      type: 'fiat'
    }],
    emoji: '🇱🇰',
    languages: [
      {
        name: 'Sinhala',
        name_native: 'සිංහල'
      },
      {
        name: 'Tamil',
        name_native: 'தமிழ்'
      }
    ],
    timezones: ['Asia/Colombo'],
    is_in_european_union: false,
    tlds: ['.lk']
  },
  NP: {
    currencies: [{
      symbol: 'Rs',
      name: 'Nepalese Rupee',
      name_native: 'नेपाली रूपैयाँ',
      symbol_native: 'रू',
      decimal_digits: 2,
      rounding: 0,
      code: 'NPR',
      name_plural: 'Nepalese rupees',
      type: 'fiat'
    }],
    emoji: '🇳🇵',
    languages: [{
      name: 'Nepali',
      name_native: 'नेपाली'
    }],
    timezones: ['Asia/Kathmandu'],
    is_in_european_union: false,
    tlds: ['.np']
  },
  // More Southeast Asia
  MM: {
    currencies: [{
      symbol: 'K',
      name: 'Myanmar Kyat',
      name_native: 'မြန်မာကျပ်',
      symbol_native: 'K',
      decimal_digits: 2,
      rounding: 0,
      code: 'MMK',
      name_plural: 'Myanmar kyats',
      type: 'fiat'
    }],
    emoji: '🇲🇲',
    languages: [{
      name: 'Burmese',
      name_native: 'မြန်မာစာ'
    }],
    timezones: ['Asia/Yangon'],
    is_in_european_union: false,
    tlds: ['.mm']
  },
  LA: {
    currencies: [{
      symbol: '₭',
      name: 'Lao Kip',
      name_native: 'ລາວກີບ',
      symbol_native: '₭',
      decimal_digits: 2,
      rounding: 0,
      code: 'LAK',
      name_plural: 'Lao kip',
      type: 'fiat'
    }],
    emoji: '🇱🇦',
    languages: [{
      name: 'Lao',
      name_native: 'ລາວ'
    }],
    timezones: ['Asia/Vientiane'],
    is_in_european_union: false,
    tlds: ['.la']
  },
  KH: {
    currencies: [{
      symbol: '៛',
      name: 'Cambodian Riel',
      name_native: 'រៀលខ្មែរ',
      symbol_native: '៛',
      decimal_digits: 2,
      rounding: 0,
      code: 'KHR',
      name_plural: 'Cambodian riels',
      type: 'fiat'
    }],
    emoji: '🇰🇭',
    languages: [{
      name: 'Khmer',
      name_native: 'ភាសាខ្មែរ'
    }],
    timezones: ['Asia/Phnom_Penh'],
    is_in_european_union: false,
    tlds: ['.kh']
  }
};
