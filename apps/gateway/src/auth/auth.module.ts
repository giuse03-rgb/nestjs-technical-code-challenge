import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
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
export class AuthModule {}
