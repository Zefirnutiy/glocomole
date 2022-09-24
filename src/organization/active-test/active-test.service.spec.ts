import { Test, TestingModule } from '@nestjs/testing';
import { ActiveTestService } from './active-test.service';

describe('ActiveTestService', () => {
  let service: ActiveTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActiveTestService],
    }).compile();

    service = module.get<ActiveTestService>(ActiveTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
