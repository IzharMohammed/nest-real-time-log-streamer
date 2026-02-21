import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { Drizzle } from './drizzle/drizzle';
import { ConfigModule } from '@nestjs/config';
import { LogsModule } from './logs/logs.module';
import configuration from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration],
  }), DatabaseModule, LogsModule],
  controllers: [AppController],
  providers: [AppService, Drizzle],
})
export class AppModule { }
