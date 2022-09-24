import { Test, TestingModule } from '@nestjs/testing';
import { PublicInfoController } from './public-info.controller';
import { PublicInfoService } from './public-info.service';

describe('PublicInfoController', () => {
  let controller: PublicInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicInfoController],
      providers: [PublicInfoService],
    }).compile();

    controller = module.get<PublicInfoController>(PublicInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
