import { Test, TestingModule } from '@nestjs/testing';
import { ActiveCourseService } from './active-course.service';

describe('ActiveCourseService', () => {
  let service: ActiveCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActiveCourseService],
    }).compile();

    service = module.get<ActiveCourseService>(ActiveCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
