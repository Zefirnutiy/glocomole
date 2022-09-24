import { Test, TestingModule } from '@nestjs/testing';
import { DeadLineService } from './dead-line.service';

describe('DeadLineService', () => {
  let service: DeadLineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeadLineService],
    }).compile();

    service = module.get<DeadLineService>(DeadLineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
