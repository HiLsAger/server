import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { contentParser } from 'fastify-multer';
import { join } from 'path';
import fastifyStatic from '@fastify/static';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = new DocumentBuilder()
    .setTitle('Open Imaginagtion')
    .setDescription('Документация Open Imaginagtion')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.useStaticAssets({
    root: join(__dirname, '..', 'clips'),
    prefix: '/clips/',
  });
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views'),
  });
  SwaggerModule.setup('docs', app, document);
  await app.register(contentParser);
  await app.listen(3001, '0.0.0.0');
  console.log(`Started server: ${await app.getUrl()}`);
}
bootstrap();
