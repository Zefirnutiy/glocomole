import { FileInformationService } from './file-information.service';
import { CreateFileInformationDto } from './dto/create-file-information.dto';
import { UpdateFileInformationDto } from './dto/update-file-information.dto';
export declare class FileInformationController {
    private readonly fileInformationService;
    constructor(fileInformationService: FileInformationService);
    create(createFileInformationDto: CreateFileInformationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFileInformationDto: UpdateFileInformationDto): string;
    remove(id: string): string;
}
