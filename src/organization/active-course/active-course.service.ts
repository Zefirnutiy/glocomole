import { Injectable } from '@nestjs/common';
import { CreateActiveCourseDto } from './dto/create-active-course.dto';
import { UpdateActiveCourseDto } from './dto/update-active-course.dto';

@Injectable()
export class ActiveCourseService {
  create(createActiveCourseDto: CreateActiveCourseDto) {
    return 'This action adds a new activeCourse';
  }

  findAll() {
    return `This action returns all activeCourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activeCourse`;
  }

  update(id: number, updateActiveCourseDto: UpdateActiveCourseDto) {
    return `This action updates a #${id} activeCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} activeCourse`;
  }
}
