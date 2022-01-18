import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { Quiz } from './quiz.entity';
import { QuizzesService } from './quizzes.service';

@Controller('quizzes')
export class QuizzesController {
  constructor(private quizzesService: QuizzesService) {}

  @Get()
  getQuizzes(): Promise<Quiz[]> {
    return this.quizzesService.getQuizzes();
  }

  @Get('/:id')
  getQuiz(@Param('id') id: string): Promise<Quiz> {
    return this.quizzesService.getQuiz(id, false);
  }

  @Get('/:id/questions')
  getQuizQustions(@Param('id') id: string): Promise<Quiz> {
    return this.quizzesService.getQuiz(id, true);
  }

  @Post()
  createQuiz(@Body() createQuizDto: CreateQuizDto): Promise<Quiz> {
    return this.quizzesService.createQuiz(createQuizDto);
  }

  @Patch('/:id')
  updateQuiz(
    @Param('id') id: string,
    @Body('name') name: string,
  ): Promise<Quiz> {
    return this.quizzesService.updateQuiz(id, name);
  }

  @Delete('/:id')
  deleteQuiz(@Param('id') id: string): Promise<void> {
    return this.quizzesService.deleteQuiz(id);
  }
}
