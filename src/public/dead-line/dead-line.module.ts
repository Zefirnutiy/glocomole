import { Module } from '@nestjs/common';
import { DeadLineService } from './dead-line.service';
import { DeadLineController } from './dead-line.controller';

@Module({
  controllers: [DeadLineController],
  providers: [DeadLineService]
})
export class DeadLineModule {}
