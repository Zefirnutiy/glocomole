import { Module } from '@nestjs/common';
import { ActiveTestService } from './active-test.service';
import { ActiveTestController } from './active-test.controller';

@Module({
  controllers: [ActiveTestController],
  providers: [ActiveTestService]
})
export class ActiveTestModule {}
