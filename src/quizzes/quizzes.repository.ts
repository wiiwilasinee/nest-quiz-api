import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import slugify from 'slugify';
import { EntityRepository, Repository } from 'typeorm';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { Quiz } from './quiz.entity';

@EntityRepository(Quiz)
export class QuizzesRepository extends Repository<Quiz> {
  async getQuizzes(): Promise<Quiz[]> {
    const query = this.createQueryBuilder('quiz');
    const quizzes = query.getMany();
    return quizzes;
  }
  async createQuiz(createQuizDto: CreateQuizDto): Promise<Quiz> {
    const { name } = createQuizDto;
    const quiz = this.create({
      name,
      slug: slugify(name, { replacement: '-', lower: true }),
    });

    try {
      await this.save(quiz);
      return quiz;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Quiz already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
