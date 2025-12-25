import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
    }),
    MongooseModule.forRoot(
        process.env.MONGO_URI!
    ),
    AuthModule,
    HealthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
