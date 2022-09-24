import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FileInformationService } from './file-information.service';
import { CreateFileInformationDto } from './dto/create-file-information.dto';
import { UpdateFileInformationDto } from './dto/update-file-information.dto';

@Controller('file-information')
export class FileInformationController {
  constructor(private readonly fileInformationService: FileInformationService) {}

  @Post()
  create(@Body() createFileInformationDto: CreateFileInformationDto) {
    return this.fileInformationService.create(createFileInformationDto);
  }

  @Get()
  findAll() {
    return this.fileInformationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileInformationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileInformationDto: UpdateFileInformationDto) {
    return this.fileInformationService.update(+id, updateFileInformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileInformationService.remove(+id);
  }
}
