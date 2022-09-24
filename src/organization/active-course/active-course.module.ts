import { Module } from '@nestjs/common';
import { ActiveCourseService } from './active-course.service';
import { ActiveCourseController } from './active-course.controller';

@Module({
  controllers: [ActiveCourseController],
  providers: [ActiveCourseService]
})
export class ActiveCourseModule {}
