import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true
        })
    );

    const config = new DocumentBuilder()
        .setTitle('NestJS - Technical code challenge')
        .setDescription('Backend technical code challenge project with an API Gateway and an Authentication microservice')
        .setVersion('1.0')
        .addTag('authentication')
        .build()

    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory);

    const port: string = process.env.port || '3000';
    await app.listen(port);

    console.log(`Api gateway is running on port ${port}`);
}
bootstrap();
