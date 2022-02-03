import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizzesModule } from './quizzes/quizzes.module';
import { QuestionsModule } from './questions/questions.module';
import { OptionsModule } from './options/options.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest-quiz-api',
      autoLoadEntities: true,
      synchronize: true,
    }),
    QuizzesModule,
    QuestionsModule,
    OptionsModule,
  ],
})
export class AppModule {}
