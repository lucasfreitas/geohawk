import { CountryData } from '../../interfaces/country-data.interface';

export const southAmerica: Record<string, CountryData> = {
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
  BO: {
    currencies: [{
      symbol: 'Bs',
      name: 'Bolivian Boliviano',
      name_native: 'Boliviano',
      symbol_native: 'Bs',
      decimal_digits: 2,
      rounding: 0,
      code: 'BOB',
      name_plural: 'Bolivian bolivianos',
      type: 'fiat'
    }],
    emoji: '🇧🇴',
    languages: [
      {
        name: 'Spanish',
        name_native: 'Español'
      },
      {
        name: 'Quechua',
        name_native: 'Runasimi'
      },
      {
        name: 'Aymara',
        name_native: 'Aymar aru'
      }
    ],
    timezones: ['America/La_Paz'],
    is_in_european_union: false,
    tlds: ['.bo']
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
    is_in_european_union: false,
    tlds: ['.br', '.com.br', '.net.br', '.org.br', '.gov.br', '.edu.br']
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
  },
  CO: {
    currencies: [{
      symbol: 'CO$',
      name: 'Colombian Peso',
      name_native: 'Peso Colombiano',
      symbol_native: '$',
      decimal_digits: 0,
      rounding: 0,
      code: 'COP',
      name_plural: 'Colombian pesos',
      type: 'fiat'
    }],
    emoji: '🇨🇴',
    languages: [{
      name: 'Spanish',
      name_native: 'Español'
    }],
    timezones: ['America/Bogota'],
    is_in_european_union: false,
    tlds: ['.co']
  },
  EC: {
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
    emoji: '🇪🇨',
    languages: [{
      name: 'Spanish',
      name_native: 'Español'
    }],
    timezones: ['America/Guayaquil', 'Pacific/Galapagos'],
    is_in_european_union: false,
    tlds: ['.ec']
  },
  GY: {
    currencies: [{
      symbol: 'GY$',
      name: 'Guyanese Dollar',
      name_native: 'Guyanese Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'GYD',
      name_plural: 'Guyanese dollars',
      type: 'fiat'
    }],
    emoji: '🇬🇾',
    languages: [{
      name: 'English',
      name_native: 'English'
    }],
    timezones: ['America/Guyana'],
    is_in_european_union: false,
    tlds: ['.gy']
  },
  PY: {
    currencies: [{
      symbol: '₲',
      name: 'Paraguayan Guarani',
      name_native: 'Guaraní Paraguayo',
      symbol_native: '₲',
      decimal_digits: 0,
      rounding: 0,
      code: 'PYG',
      name_plural: 'Paraguayan guaranis',
      type: 'fiat'
    }],
    emoji: '🇵🇾',
    languages: [
      {
        name: 'Spanish',
        name_native: 'Español'
      },
      {
        name: 'Guarani',
        name_native: 'Avañe\'ẽ'
      }
    ],
    timezones: ['America/Asuncion'],
    is_in_european_union: false,
    tlds: ['.py']
  },
  PE: {
    currencies: [{
      symbol: 'S/',
      name: 'Peruvian Sol',
      name_native: 'Sol Peruano',
      symbol_native: 'S/',
      decimal_digits: 2,
      rounding: 0,
      code: 'PEN',
      name_plural: 'Peruvian soles',
      type: 'fiat'
    }],
    emoji: '🇵🇪',
    languages: [
      {
        name: 'Spanish',
        name_native: 'Español'
      },
      {
        name: 'Quechua',
        name_native: 'Runasimi'
      },
      {
        name: 'Aymara',
        name_native: 'Aymar aru'
      }
    ],
    timezones: ['America/Lima'],
    is_in_european_union: false,
    tlds: ['.pe']
  },
  SR: {
    currencies: [{
      symbol: '$',
      name: 'Surinamese Dollar',
      name_native: 'Surinaamse Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'SRD',
      name_plural: 'Surinamese dollars',
      type: 'fiat'
    }],
    emoji: '🇸🇷',
    languages: [
      {
        name: 'Dutch',
        name_native: 'Nederlands'
      }
    ],
    timezones: ['America/Paramaribo'],
    is_in_european_union: false,
    tlds: ['.sr']
  },
  UY: {
    currencies: [{
      symbol: '$U',
      name: 'Uruguayan Peso',
      name_native: 'Peso Uruguayo',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'UYU',
      name_plural: 'Uruguayan pesos',
      type: 'fiat'
    }],
    emoji: '🇺🇾',
    languages: [{
      name: 'Spanish',
      name_native: 'Español'
    }],
    timezones: ['America/Montevideo'],
    is_in_european_union: false,
    tlds: ['.uy']
  },
  VE: {
    currencies: [{
      symbol: 'Bs.S.',
      name: 'Venezuelan Bolívar Soberano',
      name_native: 'Bolívar Soberano',
      symbol_native: 'Bs.S.',
      decimal_digits: 2,
      rounding: 0,
      code: 'VES',
      name_plural: 'Venezuelan bolívares soberanos',
      type: 'fiat'
    }],
    emoji: '🇻🇪',
    languages: [{
      name: 'Spanish',
      name_native: 'Español'
    }],
    timezones: ['America/Caracas'],
    is_in_european_union: false,
    tlds: ['.ve']
  }
};
