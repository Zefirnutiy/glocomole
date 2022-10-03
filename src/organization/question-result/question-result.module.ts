import { Global, Module } from '@nestjs/common';
import { QuestionResultService } from './question-result.service';
import { QuestionResultController } from './question-result.controller';

@Global()
@Module({
  controllers: [QuestionResultController],
  providers: [QuestionResultService]
})
export class QuestionResultModule {}
