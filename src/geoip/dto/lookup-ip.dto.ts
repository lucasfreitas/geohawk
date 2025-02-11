import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { IsValidIP } from '../validators/ip.validator';

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
      }
    }
  })
  asn?: {
    number?: number;
    organization?: string;
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
}
