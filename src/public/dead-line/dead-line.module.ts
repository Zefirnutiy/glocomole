import { Global, Module } from '@nestjs/common';
import { DeadLineService } from './dead-line.service';
import { DeadLineController } from './dead-line.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeadLine } from './entities/dead-line.entity';

@Global()
@Module({
  controllers: [DeadLineController],
  providers: [DeadLineService],
  imports: [TypeOrmModule.forFeature([DeadLine])],
})
export class DeadLineModule {}
