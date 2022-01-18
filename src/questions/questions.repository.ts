import { Quiz } from 'src/quizzes/quiz.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './question.entity';

@EntityRepository(Question)
export class QuestionsRepository extends Repository<Question> {
  async createQuestion(
    createQuestionDto: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const { content, message } = createQuestionDto;
    const question = this.create({ quiz, content, message });
    await this.save(question);
    return question;
  }
}
