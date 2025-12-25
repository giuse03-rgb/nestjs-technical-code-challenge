import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
        transport: Transport.TCP,
        options: {
            host: process.env.AUTH_HOST || 'localhost',
            port: Number(process.env.AUTH_PORT) || 4001,
        }
    }
  )
  await app.listen();
  console.log("Authentication microservice is running");
}
bootstrap();
