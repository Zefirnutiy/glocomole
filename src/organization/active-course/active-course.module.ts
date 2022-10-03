import { Global, Module } from '@nestjs/common';
import { ActiveCourseService } from './active-course.service';
import { ActiveCourseController } from './active-course.controller';

@Global()
@Module({
  controllers: [ActiveCourseController],
  providers: [ActiveCourseService]
})
export class ActiveCourseModule {}
