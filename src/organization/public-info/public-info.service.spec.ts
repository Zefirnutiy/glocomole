import { Test, TestingModule } from '@nestjs/testing';
import { PublicInfoService } from './public-info.service';

describe('PublicInfoService', () => {
  let service: PublicInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicInfoService],
    }).compile();

    service = module.get<PublicInfoService>(PublicInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
