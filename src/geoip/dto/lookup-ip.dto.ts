import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { IsValidIP } from '../validators/ip.validator';
import { Currency, Language } from '../interfaces/country-data.interface';
import { SecurityCheck } from '../interfaces/security-check.interface';

export class LookupIpDto {
  @ApiProperty({
    description: 'IP address to lookup (IPv4 or IPv6)',
    example: '8.8.8.8',
    required: true
  })
  @IsValidIP()
  @IsNotEmpty()
  ip: string;
}

export class GeoIpResponseDto {
  @ApiProperty({
    description: 'The queried IP address',
    example: '8.8.8.8'
  })
  ip: string;

  @ApiProperty({
    description: 'IP address type',
    enum: ['ipv4', 'ipv6'],
    example: 'ipv4'
  })
  type: 'ipv4' | 'ipv6';

  @ApiProperty({
    description: 'City name if available',
    example: 'Mountain View',
    required: false
  })
  city?: string;

  @ApiProperty({
    description: 'State or region name if available',
    example: 'California',
    required: false
  })
  state?: string;

  @ApiProperty({
    description: 'Country name if available',
    example: 'United States',
    required: false
  })
  country?: string;

  @ApiProperty({
    description: 'ISO country code if available',
    example: 'US',
    required: false
  })
  countryCode?: string;

  @ApiProperty({
    description: 'Location information if available',
    required: false,
    type: 'object',
    properties: {
      latitude: {
        type: 'number',
        description: 'Latitude coordinate',
        example: 37.4223
      },
      longitude: {
        type: 'number',
        description: 'Longitude coordinate',
        example: -122.0847
      },
      timeZone: {
        type: 'string',
        description: 'Time zone name',
        example: 'America/Los_Angeles'
      }
    }
  })
  location?: {
    latitude?: number;
    longitude?: number;
    timeZone?: string;
  };

  @ApiProperty({
    description: 'ASN (Autonomous System Number) information if available',
    required: false,
    type: 'object',
    properties: {
      number: {
        type: 'number',
        description: 'ASN number',
        example: 15169
      },
      organization: {
        type: 'string',
        description: 'Organization name',
        example: 'Google LLC'
      },
      route: {
        type: 'string',
        description: 'Network route',
        example: '8.8.8.0/24'
      },
      domain: {
        type: 'string',
        description: 'Organization domain',
        example: 'google.com'
      },
      type: {
        type: 'string',
        description: 'ASN type',
        example: 'business'
      }
    }
  })
  asn?: {
    number?: number;
    organization?: string;
    route?: string;
    domain?: string;
    type?: string;
  };

  @ApiProperty({
    description: 'Network range in CIDR notation if available',
    example: '8.8.8.0/24',
    required: false
  })
  network?: string;

  @ApiProperty({
    description: 'Error message if lookup fails',
    example: 'Invalid IP address',
    required: false
  })
  error?: string;

  @ApiProperty({
    description: 'Country currencies',
    required: false,
    type: 'array',
    items: {
      type: 'object',
      properties: {
        symbol: {
          type: 'string',
          description: 'Currency symbol',
          example: '$'
        },
        name: {
          type: 'string',
          description: 'Currency name in English',
          example: 'US Dollar'
        },
        name_native: {
          type: 'string',
          description: 'Currency name in native language',
          example: 'US Dollar'
        },
        symbol_native: {
          type: 'string',
          description: 'Native currency symbol',
          example: '$'
        },
        decimal_digits: {
          type: 'number',
          description: 'Number of decimal digits',
          example: 2
        },
        rounding: {
          type: 'number',
          description: 'Rounding precision',
          example: 0
        },
        code: {
          type: 'string',
          description: 'Currency code',
          example: 'USD'
        },
        name_plural: {
          type: 'string',
          description: 'Plural form of currency name',
          example: 'US dollars'
        },
        type: {
          type: 'string',
          description: 'Currency type',
          example: 'fiat'
        }
      }
    }
  })
  currencies?: Currency[];

  @ApiProperty({
    description: 'Country flag emoji',
    example: '🇺🇸',
    required: false
  })
  emoji?: string;

  @ApiProperty({
    description: 'Country languages',
    required: false,
    type: 'array',
    items: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Language name in English',
          example: 'English'
        },
        name_native: {
          type: 'string',
          description: 'Language name in its native form',
          example: 'English'
        }
      }
    }
  })
  languages?: Language[];

  @ApiProperty({
    description: 'List of timezones in the country',
    required: false,
    type: 'array',
    items: {
      type: 'string'
    },
    example: [
      'America/Sao_Paulo',
      'America/Recife',
      'America/Manaus',
      'America/Belem'
    ]
  })
  timezones?: string[];

  @ApiProperty({
    description: 'Whether the country is a member of the European Union',
    required: false,
    type: 'boolean',
    example: false
  })
  is_in_european_union?: boolean;

  @ApiProperty({
    description: 'Top Level Domains (TLDs) associated with the country',
    required: false,
    type: 'array',
    items: {
      type: 'string'
    },
    example: ['.br', '.com.br', '.net.br', '.org.br', '.gov.br', '.edu.br']
  })
  tlds?: string[];

  @ApiProperty({
    description: 'Security information about the IP address',
    required: false,
    type: 'object',
    properties: {
      is_datacenter: {
        type: 'boolean',
        description: 'Whether the IP belongs to a datacenter/cloud provider',
        example: true
      },
      is_tor: {
        type: 'boolean',
        description: 'Whether the IP is a Tor exit node',
        example: false
      },
      is_vpn: {
        type: 'boolean',
        description: 'Whether the IP belongs to a VPN provider',
        example: false
      },
      is_proxy: {
        type: 'boolean',
        description: 'Whether the IP is being used as a proxy',
        example: false
      },
      is_search_engine: {
        type: 'boolean',
        description: 'Whether the IP belongs to a search engine bot',
        example: true
      },
      is_residential: {
        type: 'boolean',
        description: 'Whether the IP is from a residential ISP',
        example: false
      },
      is_ads_bot: {
        type: 'boolean',
        description: 'Whether the IP belongs to an advertising platform bot',
        example: true
      },
      ads_company: {
        type: 'string',
        description: 'Name of the advertising platform if is_ads_bot is true',
        example: 'Facebook Ads'
      },
      risk_score: {
        type: 'number',
        description: 'Risk score from 0-100',
        example: 20
      },
      risk_level: {
        type: 'string',
        description: 'Risk level classification',
        enum: ['very low', 'low', 'medium', 'high', 'very high'],
        example: 'low'
      },
      connection_type: {
        type: 'string',
        description: 'Type of network connection',
        example: 'Ads Bot'
      },
      risk_factors: {
        type: 'array',
        description: 'List of detected risk factors',
        items: {
          type: 'string'
        },
        example: ['Advertising Platform Bot']
      }
    }
  })
  security?: SecurityCheck;
}
