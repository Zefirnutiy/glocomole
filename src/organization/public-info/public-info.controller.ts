import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PublicInfoService } from './public-info.service';
import { CreatePublicInfoDto } from './dto/create-public-info.dto';
import { UpdatePublicInfoDto } from './dto/update-public-info.dto';

@Controller('public-info')
export class PublicInfoController {
  constructor(private readonly publicInfoService: PublicInfoService) {}

  @Post()
  create(@Body() createPublicInfoDto: CreatePublicInfoDto) {
    return this.publicInfoService.create(createPublicInfoDto);
  }

  @Get()
  findAll() {
    return this.publicInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePublicInfoDto: UpdatePublicInfoDto) {
    return this.publicInfoService.update(+id, updatePublicInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicInfoService.remove(+id);
  }
}
