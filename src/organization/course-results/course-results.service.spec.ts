import { Test, TestingModule } from '@nestjs/testing';
import { CourseResultsService } from './course-results.service';

describe('CourseResultsService', () => {
  let service: CourseResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseResultsService],
    }).compile();

    service = module.get<CourseResultsService>(CourseResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
