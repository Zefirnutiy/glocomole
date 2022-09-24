import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeadLineService } from './dead-line.service';
import { CreateDeadLineDto } from './dto/create-dead-line.dto';
import { UpdateDeadLineDto } from './dto/update-dead-line.dto';

@Controller('dead-line')
export class DeadLineController {
  constructor(private readonly deadLineService: DeadLineService) {}

  @Post()
  create(@Body() createDeadLineDto: CreateDeadLineDto) {
    return this.deadLineService.create(createDeadLineDto);
  }

  @Get()
  findAll() {
    return this.deadLineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deadLineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeadLineDto: UpdateDeadLineDto) {
    return this.deadLineService.update(+id, updateDeadLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deadLineService.remove(+id);
  }
}
