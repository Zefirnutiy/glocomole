import { Module } from '@nestjs/common';
import { FileInformationService } from './file-information.service';
import { FileInformationController } from './file-information.controller';

@Module({
  controllers: [FileInformationController],
  providers: [FileInformationService]
})
export class FileInformationModule {}
