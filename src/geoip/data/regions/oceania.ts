import { CountryData } from '../../interfaces/country-data.interface';

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
  },
  FJ: {
    currencies: [{
      symbol: 'FJ$',
      name: 'Fijian Dollar',
      name_native: 'Fijian Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'FJD',
      name_plural: 'Fijian dollars',
      type: 'fiat'
    }],
    emoji: '🇫🇯',
    languages: [
      {
        name: 'English',
        name_native: 'English'
      },
      {
        name: 'Fijian',
        name_native: 'Na Vosa Vakaviti'
      },
      {
        name: 'Hindi',
        name_native: 'हिन्दी'
      }
    ],
    timezones: ['Pacific/Fiji'],
    is_in_european_union: false,
    tlds: ['.fj']
  },
  PG: {
    currencies: [{
      symbol: 'PGK',
      name: 'Papua New Guinean Kina',
      name_native: 'Papua New Guinean Kina',
      symbol_native: 'K',
      decimal_digits: 2,
      rounding: 0,
      code: 'PGK',
      name_plural: 'Papua New Guinean kina',
      type: 'fiat'
    }],
    emoji: '🇵🇬',
    languages: [
      {
        name: 'English',
        name_native: 'English'
      },
      {
        name: 'Tok Pisin',
        name_native: 'Tok Pisin'
      },
      {
        name: 'Hiri Motu',
        name_native: 'Hiri Motu'
      }
    ],
    timezones: ['Pacific/Port_Moresby', 'Pacific/Bougainville'],
    is_in_european_union: false,
    tlds: ['.pg']
  },
  SB: {
    currencies: [{
      symbol: 'SI$',
      name: 'Solomon Islands Dollar',
      name_native: 'Solomon Islands Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'SBD',
      name_plural: 'Solomon Islands dollars',
      type: 'fiat'
    }],
    emoji: '🇸🇧',
    languages: [{
      name: 'English',
      name_native: 'English'
    }],
    timezones: ['Pacific/Guadalcanal'],
    is_in_european_union: false,
    tlds: ['.sb']
  },
  VU: {
    currencies: [{
      symbol: 'VT',
      name: 'Vanuatu Vatu',
      name_native: 'Vatu',
      symbol_native: 'VT',
      decimal_digits: 0,
      rounding: 0,
      code: 'VUV',
      name_plural: 'Vanuatu vatu',
      type: 'fiat'
    }],
    emoji: '🇻🇺',
    languages: [
      {
        name: 'Bislama',
        name_native: 'Bislama'
      },
      {
        name: 'English',
        name_native: 'English'
      },
      {
        name: 'French',
        name_native: 'Français'
      }
    ],
    timezones: ['Pacific/Efate'],
    is_in_european_union: false,
    tlds: ['.vu']
  },
  NC: {
    currencies: [{
      symbol: 'CFPF',
      name: 'CFP Franc',
      name_native: 'Franc CFP',
      symbol_native: '₣',
      decimal_digits: 0,
      rounding: 0,
      code: 'XPF',
      name_plural: 'CFP francs',
      type: 'fiat'
    }],
    emoji: '🇳🇨',
    languages: [{
      name: 'French',
      name_native: 'Français'
    }],
    timezones: ['Pacific/Noumea'],
    is_in_european_union: false,
    tlds: ['.nc']
  }
};
