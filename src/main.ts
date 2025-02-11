import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global validation pipe configuration
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // Swagger documentation configuration
  const config = new DocumentBuilder()
    .setTitle('GeoHawk')
    .setDescription('A high-precision IP geolocation service that soars above the rest. GeoHawk provides detailed location information for both IPv4 and IPv6 addresses with hawk-eye accuracy using MaxMind GeoIP2 databases.')
    .setVersion('1.0')
    .addApiKey({ 
      type: 'apiKey',
      name: 'x-api-key',
      in: 'header',
      description: 'API key for authentication'
    }, 'x-api-key')
    .addTag('GeoIP', 'IP geolocation endpoints')
    .setContact('Support', 'https://github.com/lucasfreitas/geohawk/issues', '')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // CORS configuration
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Start server
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Application is running on: ${await app.getUrl()}`);
  console.log(`📚 API documentation available at: ${await app.getUrl()}/api`);
}

bootstrap();
