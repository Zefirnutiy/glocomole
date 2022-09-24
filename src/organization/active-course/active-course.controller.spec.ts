import { Test, TestingModule } from '@nestjs/testing';
import { ActiveCourseController } from './active-course.controller';
import { ActiveCourseService } from './active-course.service';

describe('ActiveCourseController', () => {
  let controller: ActiveCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActiveCourseController],
      providers: [ActiveCourseService],
    }).compile();

    controller = module.get<ActiveCourseController>(ActiveCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
