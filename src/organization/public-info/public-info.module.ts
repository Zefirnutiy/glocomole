import { Module } from '@nestjs/common';
import { PublicInfoService } from './public-info.service';
import { PublicInfoController } from './public-info.controller';

@Module({
  controllers: [PublicInfoController],
  providers: [PublicInfoService]
})
export class PublicInfoModule {}
