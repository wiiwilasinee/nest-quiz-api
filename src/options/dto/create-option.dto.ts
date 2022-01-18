import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty()
  question_id: string;

  @IsNotEmpty()
  content: string;

  @IsOptional()
  is_correct: boolean;
}
