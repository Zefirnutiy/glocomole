import { Global, Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';

@Global()
@Module({
  controllers: [QuestionController],
  providers: [QuestionService]
})
export class QuestionModule {}
