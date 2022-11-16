import { NestFactory } from '@nestjs/core';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './v1/app.module';
import configuration from './v1/config/configuration.';
import * as swStats from 'swagger-stats';
import { logger } from './v1/middleware/url.middleware';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle("Webb App Mass")
    .setVersion("1.0")
    .setLicense("Apache License", "Lincencia.txt")
    .addTag("Usuario")
    /*
    .addTag("Categoria")
    .addTag("Trabajo")
    .addTag("Categoria Detalle")
    .addTag("Pais")
    .addTag("Trabajo Detalle")
    .addTag("Moneda")
    */
    .addTag("Usuario Public")

    .build();

  const informacion = configuration();
  const version = 'http://localhost:' + informacion.port;
  app.use(
    swStats.getMiddleware({
      name: 'api-web-app-mass',
      authentication: true,
      onAuthenticate: function (req, username, password) {
        // simple check for username and password
        return (
          username === informacion.usernamelentecia &&
          password === informacion.passwordlatencia
        );
      },
      durationBuckets: [50, 100, 200, 500, 1000, 5000],
      requestSizeBuckets: [500, 5000, 15000, 50000],
      responseSizeBuckets: [600, 6000, 6000, 60000],
      elasticsearch: version,
      timelineBucketDuration: 60000,
      version: '0.94.0',
      hostname: 'hostname',
      elasticsearchUsername: informacion.usernamelentecia,
      elasticsearchPassword: informacion.passwordlatencia,
      elasticsearchIndexPrefix: 'book-catalog-',
      uriPath: '/swagger-stats',
    }),
  );

  app.use(logger);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentacion', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
      forbidNonWhitelisted: true,
      disableErrorMessages: false,
    }),
  );
  app.enableCors();
  await app.listen(informacion.port);
}
bootstrap();