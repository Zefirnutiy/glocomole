import { Test, TestingModule } from '@nestjs/testing';
import { FileInformationController } from './file-information.controller';
import { FileInformationService } from './file-information.service';

describe('FileInformationController', () => {
  let controller: FileInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileInformationController],
      providers: [FileInformationService],
    }).compile();

    controller = module.get<FileInformationController>(FileInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
