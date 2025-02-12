import { CountryData } from '../../interfaces/country-data.interface';

export const europe: Record<string, CountryData> = {
  // European Union Members (All 27 current members)
  AT: {
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
    emoji: '🇦🇹',
    languages: [{
      name: 'German',
      name_native: 'Deutsch'
    }],
    timezones: ['Europe/Vienna'],
    is_in_european_union: true,
    tlds: ['.at']
  },
  BE: {
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
    emoji: '🇧🇪',
    languages: [
      {
        name: 'Dutch',
        name_native: 'Nederlands'
      },
      {
        name: 'French',
        name_native: 'Français'
      },
      {
        name: 'German',
        name_native: 'Deutsch'
      }
    ],
    timezones: ['Europe/Brussels'],
    is_in_european_union: true,
    tlds: ['.be']
  },
  BG: {
    currencies: [{
      symbol: 'BGN',
      name: 'Bulgarian Lev',
      name_native: 'Български лев',
      symbol_native: 'лв',
      decimal_digits: 2,
      rounding: 0,
      code: 'BGN',
      name_plural: 'Bulgarian leva',
      type: 'fiat'
    }],
    emoji: '🇧🇬',
    languages: [{
      name: 'Bulgarian',
      name_native: 'Български'
    }],
    timezones: ['Europe/Sofia'],
    is_in_european_union: true,
    tlds: ['.bg']
  },
  HR: {
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
    emoji: '🇭🇷',
    languages: [{
      name: 'Croatian',
      name_native: 'Hrvatski'
    }],
    timezones: ['Europe/Zagreb'],
    is_in_european_union: true,
    tlds: ['.hr']
  },
  CY: {
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
    emoji: '🇨🇾',
    languages: [
      {
        name: 'Greek',
        name_native: 'Ελληνικά'
      },
      {
        name: 'Turkish',
        name_native: 'Türkçe'
      }
    ],
    timezones: ['Asia/Nicosia', 'Asia/Famagusta'],
    is_in_european_union: true,
    tlds: ['.cy']
  },
  CZ: {
    currencies: [{
      symbol: 'Kč',
      name: 'Czech Koruna',
      name_native: 'Česká koruna',
      symbol_native: 'Kč',
      decimal_digits: 2,
      rounding: 0,
      code: 'CZK',
      name_plural: 'Czech korunas',
      type: 'fiat'
    }],
    emoji: '🇨🇿',
    languages: [{
      name: 'Czech',
      name_native: 'Čeština'
    }],
    timezones: ['Europe/Prague'],
    is_in_european_union: true,
    tlds: ['.cz']
  },
  DK: {
    currencies: [{
      symbol: 'Dkr',
      name: 'Danish Krone',
      name_native: 'Dansk krone',
      symbol_native: 'kr',
      decimal_digits: 2,
      rounding: 0,
      code: 'DKK',
      name_plural: 'Danish kroner',
      type: 'fiat'
    }],
    emoji: '🇩🇰',
    languages: [{
      name: 'Danish',
      name_native: 'Dansk'
    }],
    timezones: ['Europe/Copenhagen'],
    is_in_european_union: true,
    tlds: ['.dk']
  },
  EE: {
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
    emoji: '🇪🇪',
    languages: [{
      name: 'Estonian',
      name_native: 'Eesti'
    }],
    timezones: ['Europe/Tallinn'],
    is_in_european_union: true,
    tlds: ['.ee']
  },
  FI: {
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
    emoji: '🇫🇮',
    languages: [
      {
        name: 'Finnish',
        name_native: 'Suomi'
      },
      {
        name: 'Swedish',
        name_native: 'Svenska'
      }
    ],
    timezones: ['Europe/Helsinki'],
    is_in_european_union: true,
    tlds: ['.fi']
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
  GR: {
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
    emoji: '🇬🇷',
    languages: [{
      name: 'Greek',
      name_native: 'Ελληνικά'
    }],
    timezones: ['Europe/Athens'],
    is_in_european_union: true,
    tlds: ['.gr']
  },
  HU: {
    currencies: [{
      symbol: 'Ft',
      name: 'Hungarian Forint',
      name_native: 'Magyar forint',
      symbol_native: 'Ft',
      decimal_digits: 0,
      rounding: 0,
      code: 'HUF',
      name_plural: 'Hungarian forints',
      type: 'fiat'
    }],
    emoji: '🇭🇺',
    languages: [{
      name: 'Hungarian',
      name_native: 'Magyar'
    }],
    timezones: ['Europe/Budapest'],
    is_in_european_union: true,
    tlds: ['.hu']
  },
  IE: {
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
    emoji: '🇮🇪',
    languages: [
      {
        name: 'English',
        name_native: 'English'
      },
      {
        name: 'Irish',
        name_native: 'Gaeilge'
      }
    ],
    timezones: ['Europe/Dublin'],
    is_in_european_union: true,
    tlds: ['.ie']
  },
  IT: {
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
    emoji: '🇮🇹',
    languages: [{
      name: 'Italian',
      name_native: 'Italiano'
    }],
    timezones: ['Europe/Rome'],
    is_in_european_union: true,
    tlds: ['.it']
  },
  LV: {
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
    emoji: '🇱🇻',
    languages: [{
      name: 'Latvian',
      name_native: 'Latviešu'
    }],
    timezones: ['Europe/Riga'],
    is_in_european_union: true,
    tlds: ['.lv']
  },
  LT: {
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
    emoji: '🇱🇹',
    languages: [{
      name: 'Lithuanian',
      name_native: 'Lietuvių'
    }],
    timezones: ['Europe/Vilnius'],
    is_in_european_union: true,
    tlds: ['.lt']
  },
  LU: {
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
    emoji: '🇱🇺',
    languages: [
      {
        name: 'French',
        name_native: 'Français'
      },
      {
        name: 'German',
        name_native: 'Deutsch'
      },
      {
        name: 'Luxembourgish',
        name_native: 'Lëtzebuergesch'
      }
    ],
    timezones: ['Europe/Luxembourg'],
    is_in_european_union: true,
    tlds: ['.lu']
  },
  MT: {
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
    emoji: '🇲🇹',
    languages: [
      {
        name: 'Maltese',
        name_native: 'Malti'
      },
      {
        name: 'English',
        name_native: 'English'
      }
    ],
    timezones: ['Europe/Malta'],
    is_in_european_union: true,
    tlds: ['.mt']
  },
  NL: {
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
    emoji: '🇳🇱',
    languages: [{
      name: 'Dutch',
      name_native: 'Nederlands'
    }],
    timezones: ['Europe/Amsterdam'],
    is_in_european_union: true,
    tlds: ['.nl']
  },
  PL: {
    currencies: [{
      symbol: 'zł',
      name: 'Polish Złoty',
      name_native: 'Złoty polski',
      symbol_native: 'zł',
      decimal_digits: 2,
      rounding: 0,
      code: 'PLN',
      name_plural: 'Polish złoty',
      type: 'fiat'
    }],
    emoji: '🇵🇱',
    languages: [{
      name: 'Polish',
      name_native: 'Polski'
    }],
    timezones: ['Europe/Warsaw'],
    is_in_european_union: true,
    tlds: ['.pl']
  },
  PT: {
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
    emoji: '🇵🇹',
    languages: [{
      name: 'Portuguese',
      name_native: 'Português'
    }],
    timezones: ['Europe/Lisbon', 'Atlantic/Madeira', 'Atlantic/Azores'],
    is_in_european_union: true,
    tlds: ['.pt']
  },
  RO: {
    currencies: [{
      symbol: 'RON',
      name: 'Romanian Leu',
      name_native: 'Leu românesc',
      symbol_native: 'lei',
      decimal_digits: 2,
      rounding: 0,
      code: 'RON',
      name_plural: 'Romanian lei',
      type: 'fiat'
    }],
    emoji: '🇷🇴',
    languages: [{
      name: 'Romanian',
      name_native: 'Română'
    }],
    timezones: ['Europe/Bucharest'],
    is_in_european_union: true,
    tlds: ['.ro']
  },
  SK: {
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
    emoji: '🇸🇰',
    languages: [{
      name: 'Slovak',
      name_native: 'Slovenčina'
    }],
    timezones: ['Europe/Bratislava'],
    is_in_european_union: true,
    tlds: ['.sk']
  },
  SI: {
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
    emoji: '🇸🇮',
    languages: [{
      name: 'Slovenian',
      name_native: 'Slovenščina'
    }],
    timezones: ['Europe/Ljubljana'],
    is_in_european_union: true,
    tlds: ['.si']
  },
  ES: {
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
    emoji: '🇪🇸',
    languages: [{
      name: 'Spanish',
      name_native: 'Español'
    }],
    timezones: ['Europe/Madrid', 'Africa/Ceuta', 'Atlantic/Canary'],
    is_in_european_union: true,
    tlds: ['.es']
  },
  SE: {
    currencies: [{
      symbol: 'kr',
      name: 'Swedish Krona',
      name_native: 'Svensk krona',
      symbol_native: 'kr',
      decimal_digits: 2,
      rounding: 0,
      code: 'SEK',
      name_plural: 'Swedish kronor',
      type: 'fiat'
    }],
    emoji: '🇸🇪',
    languages: [{
      name: 'Swedish',
      name_native: 'Svenska'
    }],
    timezones: ['Europe/Stockholm'],
    is_in_european_union: true,
    tlds: ['.se']
  },
  // Non-EU European Countries
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
  CH: {
    currencies: [{
      symbol: 'CHF',
      name: 'Swiss Franc',
      name_native: 'Schweizer Franken',
      symbol_native: 'Fr.',
      decimal_digits: 2,
      rounding: 0,
      code: 'CHF',
      name_plural: 'Swiss francs',
      type: 'fiat'
    }],
    emoji: '🇨🇭',
    languages: [
      {
        name: 'German',
        name_native: 'Deutsch'
      },
      {
        name: 'French',
        name_native: 'Français'
      },
      {
        name: 'Italian',
        name_native: 'Italiano'
      },
      {
        name: 'Romansh',
        name_native: 'Rumantsch'
      }
    ],
    timezones: ['Europe/Zurich'],
    is_in_european_union: false,
    tlds: ['.ch']
  },
  NO: {
    currencies: [{
      symbol: 'Nkr',
      name: 'Norwegian Krone',
      name_native: 'Norsk krone',
      symbol_native: 'kr',
      decimal_digits: 2,
      rounding: 0,
      code: 'NOK',
      name_plural: 'Norwegian kroner',
      type: 'fiat'
    }],
    emoji: '🇳🇴',
    languages: [
      {
        name: 'Norwegian',
        name_native: 'Norsk'
      },
      {
        name: 'Norwegian Bokmål',
        name_native: 'Norsk bokmål'
      },
      {
        name: 'Norwegian Nynorsk',
        name_native: 'Norsk nynorsk'
      }
    ],
    timezones: ['Europe/Oslo'],
    is_in_european_union: false,
    tlds: ['.no']
  },
  IS: {
    currencies: [{
      symbol: 'kr',
      name: 'Icelandic Króna',
      name_native: 'Íslensk króna',
      symbol_native: 'kr',
      decimal_digits: 0,
      rounding: 0,
      code: 'ISK',
      name_plural: 'Icelandic krónur',
      type: 'fiat'
    }],
    emoji: '🇮🇸',
    languages: [{
      name: 'Icelandic',
      name_native: 'Íslenska'
    }],
    timezones: ['Atlantic/Reykjavik'],
    is_in_european_union: false,
    tlds: ['.is']
  },
  RS: {
    currencies: [{
      symbol: 'din.',
      name: 'Serbian Dinar',
      name_native: 'Српски динар',
      symbol_native: 'дин.',
      decimal_digits: 2,
      rounding: 0,
      code: 'RSD',
      name_plural: 'Serbian dinars',
      type: 'fiat'
    }],
    emoji: '🇷🇸',
    languages: [{
      name: 'Serbian',
      name_native: 'Српски'
    }],
    timezones: ['Europe/Belgrade'],
    is_in_european_union: false,
    tlds: ['.rs', '.срб']
  },
  UA: {
    currencies: [{
      symbol: '₴',
      name: 'Ukrainian Hryvnia',
      name_native: 'Українська гривня',
      symbol_native: '₴',
      decimal_digits: 2,
      rounding: 0,
      code: 'UAH',
      name_plural: 'Ukrainian hryvnias',
      type: 'fiat'
    }],
    emoji: '🇺🇦',
    languages: [{
      name: 'Ukrainian',
      name_native: 'Українська'
    }],
    timezones: ['Europe/Kiev', 'Europe/Uzhgorod', 'Europe/Zaporozhye'],
    is_in_european_union: false,
    tlds: ['.ua', '.укр']
  },
  BY: {
    currencies: [{
      symbol: 'Br',
      name: 'Belarusian Ruble',
      name_native: 'Беларускі рубель',
      symbol_native: 'Br',
      decimal_digits: 2,
      rounding: 0,
      code: 'BYN',
      name_plural: 'Belarusian rubles',
      type: 'fiat'
    }],
    emoji: '🇧🇾',
    languages: [
      {
        name: 'Belarusian',
        name_native: 'Беларуская'
      },
      {
        name: 'Russian',
        name_native: 'Русский'
      }
    ],
    timezones: ['Europe/Minsk'],
    is_in_european_union: false,
    tlds: ['.by', '.бел']
  },
  MD: {
    currencies: [{
      symbol: 'L',
      name: 'Moldovan Leu',
      name_native: 'Leu moldovenesc',
      symbol_native: 'L',
      decimal_digits: 2,
      rounding: 0,
      code: 'MDL',
      name_plural: 'Moldovan lei',
      type: 'fiat'
    }],
    emoji: '🇲🇩',
    languages: [{
      name: 'Romanian',
      name_native: 'Română'
    }],
    timezones: ['Europe/Chisinau'],
    is_in_european_union: false,
    tlds: ['.md']
  },
  AL: {
    currencies: [{
      symbol: 'L',
      name: 'Albanian Lek',
      name_native: 'Leku Shqiptar',
      symbol_native: 'L',
      decimal_digits: 2,
      rounding: 0,
      code: 'ALL',
      name_plural: 'Albanian lekë',
      type: 'fiat'
    }],
    emoji: '🇦🇱',
    languages: [{
      name: 'Albanian',
      name_native: 'Shqip'
    }],
    timezones: ['Europe/Tirane'],
    is_in_european_union: false,
    tlds: ['.al']
  },
  MK: {
    currencies: [{
      symbol: 'den',
      name: 'Macedonian Denar',
      name_native: 'Македонски денар',
      symbol_native: 'ден',
      decimal_digits: 2,
      rounding: 0,
      code: 'MKD',
      name_plural: 'Macedonian denari',
      type: 'fiat'
    }],
    emoji: '🇲🇰',
    languages: [{
      name: 'Macedonian',
      name_native: 'Македонски'
    }],
    timezones: ['Europe/Skopje'],
    is_in_european_union: false,
    tlds: ['.mk', '.мкд']
  }
};
