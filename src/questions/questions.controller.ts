import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './question.entity';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Post()
  createQuestion(
    @Body() createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    return this.questionsService.createQuestion(createQuestionDto);
  }

  @Delete('/:id')
  deleteQuestion(@Param('id') id: string): Promise<void> {
    return this.questionsService.deleteQuestion(id);
  }
}
