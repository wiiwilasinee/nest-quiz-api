import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizzesModule } from 'src/quizzes/quizzes.module';
import { QuestionsController } from './questions.controller';
import { QuestionsRepository } from './questions.repository';
import { QuestionsService } from './questions.service';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionsRepository]), QuizzesModule],
  exports: [QuestionsService],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
