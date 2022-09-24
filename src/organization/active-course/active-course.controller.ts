import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActiveCourseService } from './active-course.service';
import { CreateActiveCourseDto } from './dto/create-active-course.dto';
import { UpdateActiveCourseDto } from './dto/update-active-course.dto';

@Controller('active-course')
export class ActiveCourseController {
  constructor(private readonly activeCourseService: ActiveCourseService) {}

  @Post()
  create(@Body() createActiveCourseDto: CreateActiveCourseDto) {
    return this.activeCourseService.create(createActiveCourseDto);
  }

  @Get()
  findAll() {
    return this.activeCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activeCourseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActiveCourseDto: UpdateActiveCourseDto) {
    return this.activeCourseService.update(+id, updateActiveCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activeCourseService.remove(+id);
  }
}
