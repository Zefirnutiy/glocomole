import { Test, TestingModule } from '@nestjs/testing';
import { FileInformationService } from './file-information.service';

describe('FileInformationService', () => {
  let service: FileInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileInformationService],
    }).compile();

    service = module.get<FileInformationService>(FileInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
