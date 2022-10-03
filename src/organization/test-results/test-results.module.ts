import { Global, Module } from '@nestjs/common';
import { TestResultsService } from './test-results.service';
import { TestResultsController } from './test-results.controller';

@Global()
@Module({
  controllers: [TestResultsController],
  providers: [TestResultsService]
})
export class TestResultsModule {}
