import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { HealthController } from './health.controller';
import { HealthService } from './health.service';

@Module({
  controllers: [HealthController],
  providers: [HealthService],
  imports: [
    ClientsModule.register([
        {
            name: 'AUTH_SERVICE',
            transport: Transport.TCP,
            options: {
                host: process.env.AUTH_HOST || 'localhost',
                port: Number(process.env.AUTH_PORT) || 4001,
            },
        }
    ]),
  ],
})
export class HealthModule {}
