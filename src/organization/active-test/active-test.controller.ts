import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActiveTestService } from './active-test.service';
import { CreateActiveTestDto } from './dto/create-active-test.dto';
import { UpdateActiveTestDto } from './dto/update-active-test.dto';

@Controller('active-test')
export class ActiveTestController {
  constructor(private readonly activeTestService: ActiveTestService) {}

  @Post()
  create(@Body() createActiveTestDto: CreateActiveTestDto) {
    return this.activeTestService.create(createActiveTestDto);
  }

  @Get()
  findAll() {
    return this.activeTestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activeTestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActiveTestDto: UpdateActiveTestDto) {
    return this.activeTestService.update(+id, updateActiveTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activeTestService.remove(+id);
  }
}
