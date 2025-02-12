import { Module } from '@nestjs/common';
import { GeoipController } from './geoip.controller';
import { GeoipService } from './geoip.service';
import { CountryDataService } from './services/country-data.service';
import { SecurityCheckService } from './services/security-check.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [GeoipController],
  providers: [GeoipService, CountryDataService, SecurityCheckService],
  exports: [GeoipService],
})
export class GeoipModule {}
