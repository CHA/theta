import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

const globalPrefix: string = 'api'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix(globalPrefix)
  app.enableCors()

  configureSwagger(app)

  await app.listen(3000)
}

function configureSwagger(app) {
  // Configure Swagger
  const config = new DocumentBuilder()
    .setTitle('Theta Itinerary API')
    .setDescription('API to get travel itineraries')
    .setVersion('1.0')
    .addTag('itinerary')
    .build()
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api', app, document)
}

bootstrap()
