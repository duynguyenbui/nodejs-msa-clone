import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('nodejs-msa')
    .setDescription('The nodejs-msa API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);

  console.log(
    `Nest Application:::Listening on port http://localhost:${process.env.PORT}`,
  );

  await app.listen(process.env.PORT);
}
bootstrap();
