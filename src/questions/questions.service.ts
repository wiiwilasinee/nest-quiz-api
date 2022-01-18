import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizzesService } from 'src/quizzes/quizzes.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './question.entity';
import { QuestionsRepository } from './questions.repository';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(QuestionsRepository)
    private questionsRepository: QuestionsRepository,
    private quizzesService: QuizzesService,
  ) {}

  async getQuestion(id): Promise<Question> {
    const question = await this.questionsRepository.findOne(id);
    if (!question) {
      throw new NotFoundException(`Question ID ${id} not found`);
    }
    return question;
  }

  async createQuestion(
    createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    const { quiz_id } = createQuestionDto;
    const quiz = await this.quizzesService.getQuiz(quiz_id);
    return this.questionsRepository.createQuestion(createQuestionDto, quiz);
  }

  async deleteQuestion(id): Promise<void> {
    const question = await this.getQuestion(id);
    this.questionsRepository.delete(question.id);
  }
}
