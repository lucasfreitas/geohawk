import { Module } from '@nestjs/common';
import { GeoipController } from './geoip.controller';
import { GeoipService } from './geoip.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [GeoipController],
  providers: [GeoipService],
  exports: [GeoipService],
})
export class GeoipModule {}
