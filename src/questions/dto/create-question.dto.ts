import { IsNotEmpty } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  quiz_id: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  message: string;
}
