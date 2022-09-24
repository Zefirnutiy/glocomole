import { Global, Module } from '@nestjs/common';
import { FileInformationService } from './file-information.service';
import { FileInformationController } from './file-information.controller';

@Global()
@Module({
  controllers: [FileInformationController],
  providers: [FileInformationService]
})
export class FileInformationModule {}
