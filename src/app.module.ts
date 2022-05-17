import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AnimalController } from './animals.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AnimalController],
  providers: [AppService],
})
export class AppModule {}
