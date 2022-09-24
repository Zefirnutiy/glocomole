import { Module } from '@nestjs/common';
import { InputTypeService } from './input-type.service';
import { InputTypeController } from './input-type.controller';

@Module({
  controllers: [InputTypeController],
  providers: [InputTypeService]
})
export class InputTypeModule {}
