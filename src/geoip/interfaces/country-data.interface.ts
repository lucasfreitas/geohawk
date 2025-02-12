export interface Currency {
  symbol: string;
  name: string;
  name_native: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  code: string;
  name_plural: string;
  type: 'fiat' | 'crypto';
}

export interface Language {
  name: string;
  name_native: string;
}

export interface CountryData {
  currencies: Currency[];
  emoji: string;
  languages: Language[];
  timezones: string[];
  is_in_european_union: boolean;
  tlds: string[];
}
