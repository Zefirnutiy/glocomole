import { Test, TestingModule } from '@nestjs/testing';
import { CourseResultsController } from './course-results.controller';
import { CourseResultsService } from './course-results.service';

describe('CourseResultsController', () => {
  let controller: CourseResultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseResultsController],
      providers: [CourseResultsService],
    }).compile();

    controller = module.get<CourseResultsController>(CourseResultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
