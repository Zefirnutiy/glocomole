import { Test, TestingModule } from '@nestjs/testing';
import { QuestionResultController } from './question-result.controller';
import { QuestionResultService } from './question-result.service';

describe('QuestionResultController', () => {
  let controller: QuestionResultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionResultController],
      providers: [QuestionResultService],
    }).compile();

    controller = module.get<QuestionResultController>(QuestionResultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
