import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionsService } from 'src/questions/questions.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { Option } from './option.entity';
import { OptionsRepository } from './options.repository';

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(OptionsRepository)
    private optionsRepository: OptionsRepository,
    private questionsService: QuestionsService,
  ) {}

  async getOption(id, withQustion?: boolean): Promise<Option> {
    let opts = {};
    if (withQustion) {
      opts = { relations: ['question'] };
    }
    const option = await this.optionsRepository.findOne(id, opts);
    if (!option) {
      throw new NotFoundException(`Option ID ${id} not found`);
    }
    return option;
  }

  async checkOptionCorrect(
    id,
  ): Promise<{ is_correct: boolean; correct: Option; answer: Option }> {
    const option = await this.getOption(id, true);
    let correct = option;
    if (option.is_correct === false) {
      correct = await this.optionsRepository.findOne({
        where: { question: option.question, is_correct: true },
      });
    }
    return {
      answer: option,
      correct: option.is_correct ? option : correct,
      is_correct: option.is_correct,
    };
  }

  async createOption(createOptionDto: CreateOptionDto): Promise<Option> {
    const { question_id } = createOptionDto;
    const question = await this.questionsService.getQuestion(question_id);
    return this.optionsRepository.createOption(createOptionDto, question);
  }

  async deleteOption(id): Promise<void> {
    const option = await this.getOption(id);
    this.optionsRepository.delete(option.id);
  }
}
