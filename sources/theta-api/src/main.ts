import { NestFactory } from '@nestjs/core';
import { graphqlUploadExpress } from 'graphql-upload';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/app-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig: AppConfigService = app.get(AppConfigService);
  app.use(graphqlUploadExpress());
  app.enableCors();
  await app.listen(appConfig.port);
  console.log(`${appConfig.name} is running under ${appConfig.url}`);
}

bootstrap();
