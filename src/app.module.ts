import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GeoipModule } from './geoip/geoip.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GeoipModule,
  ],
})
export class AppModule {}
