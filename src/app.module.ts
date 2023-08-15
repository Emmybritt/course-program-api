import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgramsModule } from './programs/programs.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProgramsModule,
    MongooseModule.forRoot('mongodb://localhost/univacity'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
