import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // [DITAMBAH] ENABLE CORS
  app.enableCors({
    origin: [
      'http://localhost:3000', // frontend local
      // 'https://frontend-kamu.vercel.app', // nanti kalau deploy
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  // Global Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('C.R.A.C.K API')
    .setDescription('Backend API for Booking System')
    .setVersion('1.0')
    .addBearerAuth() // JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
