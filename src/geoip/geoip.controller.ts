import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GeoipService } from './geoip.service';
import { GeoIpResponseDto } from './dto/lookup-ip.dto';
import { ApiKeyGuard } from './guards/api-key.guard';

@ApiTags('GeoIP')
@Controller('geoip')
@UseGuards(ApiKeyGuard)
export class GeoipController {
  constructor(private readonly geoipService: GeoipService) {}

  @Get('lookup/:ip')
  @ApiOperation({
    summary: 'Lookup IP information',
    description: 'Get detailed information about an IP address including geolocation, ASN details, and security analysis'
  })
  @ApiParam({
    name: 'ip',
    description: 'IP address to lookup (IPv4 or IPv6)',
    example: '8.8.8.8'
  })
  @ApiResponse({
    status: 200,
    description: 'Successful IP lookup',
    type: GeoIpResponseDto
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid IP address format'
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid or missing API key'
  })
  async lookupIp(@Param('ip') ip: string): Promise<GeoIpResponseDto> {
    return this.geoipService.lookupIp(ip);
  }
}
