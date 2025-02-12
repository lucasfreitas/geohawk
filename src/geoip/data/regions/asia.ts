import { CountryData } from '../../interfaces/country-data.interface';

export const asia: Record<string, CountryData> = {
  // East Asia
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
  KR: {
    currencies: [{
      symbol: '₩',
      name: 'South Korean Won',
      name_native: '원',
      symbol_native: '₩',
      decimal_digits: 0,
      rounding: 0,
      code: 'KRW',
      name_plural: 'South Korean won',
      type: 'fiat'
    }],
    emoji: '🇰🇷',
    languages: [{
      name: 'Korean',
      name_native: '한국어'
    }],
    timezones: ['Asia/Seoul'],
    is_in_european_union: false,
    tlds: ['.kr', '.한국']
  },
  MN: {
    currencies: [{
      symbol: '₮',
      name: 'Mongolian Tugrik',
      name_native: 'Монгол төгрөг',
      symbol_native: '₮',
      decimal_digits: 2,
      rounding: 0,
      code: 'MNT',
      name_plural: 'Mongolian tugriks',
      type: 'fiat'
    }],
    emoji: '🇲🇳',
    languages: [{
      name: 'Mongolian',
      name_native: 'Монгол'
    }],
    timezones: ['Asia/Ulaanbaatar', 'Asia/Hovd', 'Asia/Choibalsan'],
    is_in_european_union: false,
    tlds: ['.mn']
  },
  // Southeast Asia
  ID: {
    currencies: [{
      symbol: 'Rp',
      name: 'Indonesian Rupiah',
      name_native: 'Rupiah Indonesia',
      symbol_native: 'Rp',
      decimal_digits: 0,
      rounding: 0,
      code: 'IDR',
      name_plural: 'Indonesian rupiahs',
      type: 'fiat'
    }],
    emoji: '🇮🇩',
    languages: [{
      name: 'Indonesian',
      name_native: 'Bahasa Indonesia'
    }],
    timezones: ['Asia/Jakarta', 'Asia/Pontianak', 'Asia/Makassar', 'Asia/Jayapura'],
    is_in_european_union: false,
    tlds: ['.id']
  },
  MY: {
    currencies: [{
      symbol: 'RM',
      name: 'Malaysian Ringgit',
      name_native: 'Ringgit Malaysia',
      symbol_native: 'RM',
      decimal_digits: 2,
      rounding: 0,
      code: 'MYR',
      name_plural: 'Malaysian ringgits',
      type: 'fiat'
    }],
    emoji: '🇲🇾',
    languages: [
      {
        name: 'Malay',
        name_native: 'Bahasa Melayu'
      },
      {
        name: 'English',
        name_native: 'English'
      }
    ],
    timezones: ['Asia/Kuala_Lumpur', 'Asia/Kuching'],
    is_in_european_union: false,
    tlds: ['.my']
  },
  SG: {
    currencies: [{
      symbol: 'S$',
      name: 'Singapore Dollar',
      name_native: 'Singapore Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'SGD',
      name_plural: 'Singapore dollars',
      type: 'fiat'
    }],
    emoji: '🇸🇬',
    languages: [
      {
        name: 'English',
        name_native: 'English'
      },
      {
        name: 'Malay',
        name_native: 'Bahasa Melayu'
      },
      {
        name: 'Chinese',
        name_native: '中文'
      },
      {
        name: 'Tamil',
        name_native: 'தமிழ்'
      }
    ],
    timezones: ['Asia/Singapore'],
    is_in_european_union: false,
    tlds: ['.sg']
  },
  TH: {
    currencies: [{
      symbol: '฿',
      name: 'Thai Baht',
      name_native: 'บาทไทย',
      symbol_native: '฿',
      decimal_digits: 2,
      rounding: 0,
      code: 'THB',
      name_plural: 'Thai baht',
      type: 'fiat'
    }],
    emoji: '🇹🇭',
    languages: [{
      name: 'Thai',
      name_native: 'ไทย'
    }],
    timezones: ['Asia/Bangkok'],
    is_in_european_union: false,
    tlds: ['.th', '.ไทย']
  },
  VN: {
    currencies: [{
      symbol: '₫',
      name: 'Vietnamese Dong',
      name_native: 'Đồng Việt Nam',
      symbol_native: '₫',
      decimal_digits: 0,
      rounding: 0,
      code: 'VND',
      name_plural: 'Vietnamese dong',
      type: 'fiat'
    }],
    emoji: '🇻🇳',
    languages: [{
      name: 'Vietnamese',
      name_native: 'Tiếng Việt'
    }],
    timezones: ['Asia/Ho_Chi_Minh'],
    is_in_european_union: false,
    tlds: ['.vn']
  },
  PH: {
    currencies: [{
      symbol: '₱',
      name: 'Philippine Peso',
      name_native: 'Piso ng Pilipinas',
      symbol_native: '₱',
      decimal_digits: 2,
      rounding: 0,
      code: 'PHP',
      name_plural: 'Philippine pesos',
      type: 'fiat'
    }],
    emoji: '🇵🇭',
    languages: [
      {
        name: 'Filipino',
        name_native: 'Filipino'
      },
      {
        name: 'English',
        name_native: 'English'
      }
    ],
    timezones: ['Asia/Manila'],
    is_in_european_union: false,
    tlds: ['.ph']
  },
  // South Asia
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
  },
  PK: {
    currencies: [{
      symbol: 'Rs',
      name: 'Pakistani Rupee',
      name_native: 'پاکستانی روپیہ',
      symbol_native: 'Rs',
      decimal_digits: 2,
      rounding: 0,
      code: 'PKR',
      name_plural: 'Pakistani rupees',
      type: 'fiat'
    }],
    emoji: '🇵🇰',
    languages: [
      {
        name: 'Urdu',
        name_native: 'اردو'
      },
      {
        name: 'English',
        name_native: 'English'
      }
    ],
    timezones: ['Asia/Karachi'],
    is_in_european_union: false,
    tlds: ['.pk']
  },
  BD: {
    currencies: [{
      symbol: '৳',
      name: 'Bangladeshi Taka',
      name_native: 'বাংলাদেশি টাকা',
      symbol_native: '৳',
      decimal_digits: 2,
      rounding: 0,
      code: 'BDT',
      name_plural: 'Bangladeshi takas',
      type: 'fiat'
    }],
    emoji: '🇧🇩',
    languages: [{
      name: 'Bengali',
      name_native: 'বাংলা'
    }],
    timezones: ['Asia/Dhaka'],
    is_in_european_union: false,
    tlds: ['.bd']
  },
  // Middle East
  AE: {
    currencies: [{
      symbol: 'AED',
      name: 'United Arab Emirates Dirham',
      name_native: 'درهم إماراتي',
      symbol_native: 'د.إ',
      decimal_digits: 2,
      rounding: 0,
      code: 'AED',
      name_plural: 'UAE dirhams',
      type: 'fiat'
    }],
    emoji: '🇦🇪',
    languages: [{
      name: 'Arabic',
      name_native: 'العربية'
    }],
    timezones: ['Asia/Dubai'],
    is_in_european_union: false,
    tlds: ['.ae', '.امارات']
  },
  SA: {
    currencies: [{
      symbol: 'SR',
      name: 'Saudi Riyal',
      name_native: 'ريال سعودي',
      symbol_native: 'ر.س',
      decimal_digits: 2,
      rounding: 0,
      code: 'SAR',
      name_plural: 'Saudi riyals',
      type: 'fiat'
    }],
    emoji: '🇸🇦',
    languages: [{
      name: 'Arabic',
      name_native: 'العربية'
    }],
    timezones: ['Asia/Riyadh'],
    is_in_european_union: false,
    tlds: ['.sa', '.السعودية']
  },
  IL: {
    currencies: [{
      symbol: '₪',
      name: 'Israeli New Shekel',
      name_native: 'שקל חדש',
      symbol_native: '₪',
      decimal_digits: 2,
      rounding: 0,
      code: 'ILS',
      name_plural: 'Israeli new shekels',
      type: 'fiat'
    }],
    emoji: '🇮🇱',
    languages: [
      {
        name: 'Hebrew',
        name_native: 'עברית'
      },
      {
        name: 'Arabic',
        name_native: 'العربية'
      }
    ],
    timezones: ['Asia/Jerusalem'],
    is_in_european_union: false,
    tlds: ['.il']
  },
  // Central Asia
  KZ: {
    currencies: [{
      symbol: '₸',
      name: 'Kazakhstani Tenge',
      name_native: 'Қазақстан теңгесі',
      symbol_native: '₸',
      decimal_digits: 2,
      rounding: 0,
      code: 'KZT',
      name_plural: 'Kazakhstani tenges',
      type: 'fiat'
    }],
    emoji: '🇰🇿',
    languages: [
      {
        name: 'Kazakh',
        name_native: 'Қазақ тілі'
      },
      {
        name: 'Russian',
        name_native: 'Русский'
      }
    ],
    timezones: ['Asia/Almaty', 'Asia/Qyzylorda', 'Asia/Qostanay', 'Asia/Aqtobe', 'Asia/Aqtau', 'Asia/Atyrau', 'Asia/Oral'],
    is_in_european_union: false,
    tlds: ['.kz', '.қаз']
  }
};
