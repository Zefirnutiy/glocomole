import { Global, Module } from '@nestjs/common';
import { ActiveTestService } from './active-test.service';
import { ActiveTestController } from './active-test.controller';

@Global()
@Module({
  controllers: [ActiveTestController],
  providers: [ActiveTestService]
})
export class ActiveTestModule {}
