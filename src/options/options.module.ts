import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionsModule } from 'src/questions/questions.module';
import { OptionsController } from './options.controller';
import { OptionsRepository } from './options.repository';
import { OptionsService } from './options.service';

@Module({
  imports: [TypeOrmModule.forFeature([OptionsRepository]), QuestionsModule],
  controllers: [OptionsController],
  providers: [OptionsService],
})
export class OptionsModule {}
