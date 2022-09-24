import { Test, TestingModule } from '@nestjs/testing';
import { ActiveTestController } from './active-test.controller';
import { ActiveTestService } from './active-test.service';

describe('ActiveTestController', () => {
  let controller: ActiveTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActiveTestController],
      providers: [ActiveTestService],
    }).compile();

    controller = module.get<ActiveTestController>(ActiveTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
