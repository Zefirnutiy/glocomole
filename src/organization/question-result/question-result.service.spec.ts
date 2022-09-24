import { Test, TestingModule } from '@nestjs/testing';
import { QuestionResultService } from './question-result.service';

describe('QuestionResultService', () => {
  let service: QuestionResultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionResultService],
    }).compile();

    service = module.get<QuestionResultService>(QuestionResultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
