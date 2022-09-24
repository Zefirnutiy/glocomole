import { Injectable } from '@nestjs/common';
import { CreateFileInformationDto } from './dto/create-file-information.dto';
import { UpdateFileInformationDto } from './dto/update-file-information.dto';

@Injectable()
export class FileInformationService {
  create(createFileInformationDto: CreateFileInformationDto) {
    return 'This action adds a new fileInformation';
  }

  findAll() {
    return `This action returns all fileInformation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileInformation`;
  }

  update(id: number, updateFileInformationDto: UpdateFileInformationDto) {
    return `This action updates a #${id} fileInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileInformation`;
  }
}
