import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  setupApiDocumentation(app);
  await app.listen(3000);
}

function setupApiDocumentation(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Theta API')
    .setDescription('Theta API Description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);
}

bootstrap();
