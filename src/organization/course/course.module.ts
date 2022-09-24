import { Global, Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';

@Global()
@Module({
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule {}
