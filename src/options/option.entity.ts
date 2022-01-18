import { Exclude } from 'class-transformer';
import { Question } from 'src/questions/question.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Option {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 250 })
  content: string;

  @Column({ default: false })
  @Exclude({ toPlainOnly: true })
  is_correct: boolean;

  @ManyToOne(() => Question, (question) => question.options, {
    onDelete: 'CASCADE',
  })
  question: Question;
}
