import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ErrorMiddleware } from './middlewares/error.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalFilters(new ErrorMiddleware());

  const config = new DocumentBuilder()
    .setTitle('Restaurant Orders')
    .setDescription('Application for managing the tables of a restaurant')
    .setVersion('1.0.0')
    .addTag('Status')
    .addTag('Tables')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3454);
}
bootstrap();
