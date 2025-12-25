import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AuthModule);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true
        })
    );
    await app.listen(process.env.port ?? 3000);
    console.log("Api gateway is running");
}
bootstrap();
