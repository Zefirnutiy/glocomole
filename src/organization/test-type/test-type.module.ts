import { Global, Module } from '@nestjs/common';
import { TestTypeService } from './test-type.service';
import { TestTypeController } from './test-type.controller';

@Global()
@Module({
  controllers: [TestTypeController],
  providers: [TestTypeService]
})
export class TestTypeModule {}
