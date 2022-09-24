import { Global, Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';

@Global()
@Module({
  controllers: [FileController],
  providers: [FileService]
})
export class FileModule {}
