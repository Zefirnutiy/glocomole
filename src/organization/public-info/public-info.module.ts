import { Global, Module } from '@nestjs/common';
import { PublicInfoService } from './public-info.service';
import { PublicInfoController } from './public-info.controller';

@Global()
@Module({
  controllers: [PublicInfoController],
  providers: [PublicInfoService]
})
export class PublicInfoModule {}
