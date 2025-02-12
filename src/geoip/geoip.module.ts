import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GeoipController } from './geoip.controller';
import { GeoipService } from './geoip.service';
import { CountryDataService } from './services/country-data.service';
import { SecurityCheckService } from './services/security-check.service';
import { IpReputationService } from './services/ip-reputation.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    })
  ],
  controllers: [GeoipController],
  providers: [
    GeoipService,
    CountryDataService,
    SecurityCheckService,
    IpReputationService
  ],
  exports: [GeoipService]
})
export class GeoipModule {}
