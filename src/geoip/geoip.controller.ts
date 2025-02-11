import { Controller, Get, Query, Headers, UnauthorizedException, HttpCode, HttpStatus } from '@nestjs/common';
import { GeoipService } from './geoip.service';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiResponse, ApiTags, ApiHeader, ApiQuery } from '@nestjs/swagger';
import { LookupIpDto, GeoIpResponseDto } from './dto/lookup-ip.dto';

@ApiTags('GeoIP')
@Controller('geoip')
export class GeoipController {
  constructor(
    private readonly geoipService: GeoipService,
    private readonly configService: ConfigService,
  ) {}

  @Get('lookup')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Lookup IP geolocation information',
    description: 'Returns detailed geolocation information for a given IP address (IPv4 or IPv6) including city, country, location coordinates, timezone, and ASN details when available.'
  })
  @ApiHeader({
    name: 'x-api-key',
    description: 'API key for authentication',
    required: true,
    example: 'your-api-key-here'
  })
  @ApiQuery({
    name: 'ip',
    description: 'IP address to lookup',
    type: String,
    required: true,
    example: '8.8.8.8'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully retrieved IP geolocation information',
    type: GeoIpResponseDto
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Invalid or missing API key'
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid IP address format'
  })
  async lookupIp(
    @Query() query: LookupIpDto,
    @Headers('x-api-key') apiKey: string,
  ): Promise<GeoIpResponseDto> {
    const validApiKey = this.configService.get<string>('API_KEY');
    if (!apiKey || apiKey !== validApiKey) {
      throw new UnauthorizedException('Invalid API key');
    }

    return this.geoipService.lookupIp(query.ip);
  }
}
