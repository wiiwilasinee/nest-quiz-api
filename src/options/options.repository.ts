import { Question } from 'src/questions/question.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateOptionDto } from './dto/create-option.dto';
import { Option } from './option.entity';

@EntityRepository(Option)
export class OptionsRepository extends Repository<Option> {
  async createOption(
    createOptionDto: CreateOptionDto,
    question: Question,
  ): Promise<Option> {
    const { content, is_correct } = createOptionDto;

    const option = this.create({
      content,
      is_correct: is_correct ? true : false,
      question,
    });
    await this.save(option);
    return option;
  }
}
