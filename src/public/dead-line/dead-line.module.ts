import { Global, Module } from '@nestjs/common';
import { DeadLineService } from './dead-line.service';
import { DeadLineController } from './dead-line.controller';

@Global()
@Module({
  controllers: [DeadLineController],
  providers: [DeadLineService]
})
export class DeadLineModule {}
