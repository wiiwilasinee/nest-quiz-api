import { Module } from '@nestjs/common';
import { QuizzesController } from './quizzes.controller';
import { QuizzesService } from './quizzes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizzesRepository } from './quizzes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([QuizzesRepository])],
  exports: [QuizzesService],
  controllers: [QuizzesController],
  providers: [QuizzesService],
})
export class QuizzesModule {}
