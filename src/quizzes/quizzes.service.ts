import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import slugify from 'slugify';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { Quiz } from './quiz.entity';
import { QuizzesRepository } from './quizzes.repository';

@Injectable()
export class QuizzesService {
  constructor(
    @InjectRepository(QuizzesRepository)
    private quizzesRepository: QuizzesRepository,
  ) {}

  getQuizzes(): Promise<Quiz[]> {
    return this.quizzesRepository.getQuizzes();
  }

  async getQuiz(id): Promise<Quiz> {
    const quiz = await this.quizzesRepository.findOne(id);
    if (!quiz) {
      throw new NotFoundException(`Quiz ID ${id} not found`);
    }
    return quiz;
  }

  async getQuizQustions(slug): Promise<Quiz> {
    const options = {
      relations: ['questions', 'questions.options'],
      where: { slug },
    };

    const quiz = await this.quizzesRepository.findOne(options);
    if (!quiz) {
      throw new NotFoundException(`Quiz ${slug} not found`);
    }
    return quiz;
  }

  createQuiz(createQuizDto: CreateQuizDto): Promise<Quiz> {
    return this.quizzesRepository.createQuiz(createQuizDto);
  }

  async updateQuiz(id, name): Promise<Quiz> {
    const quiz = await this.getQuiz(id);
    quiz.name = name;
    quiz.slug = slugify(name, { replacement: '-', lower: true });
    try {
      await this.quizzesRepository.save(quiz);
      return quiz;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException(
          'Can not update this quiz name has already exists',
        );
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async deleteQuiz(id): Promise<void> {
    const quiz = await this.getQuiz(id);
    this.quizzesRepository.delete(quiz.id);
  }
}
