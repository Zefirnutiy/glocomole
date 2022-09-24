import { Test, TestingModule } from '@nestjs/testing';
import { DeadLineController } from './dead-line.controller';
import { DeadLineService } from './dead-line.service';

describe('DeadLineController', () => {
  let controller: DeadLineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeadLineController],
      providers: [DeadLineService],
    }).compile();

    controller = module.get<DeadLineController>(DeadLineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
