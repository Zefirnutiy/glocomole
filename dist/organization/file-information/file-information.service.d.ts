import { CreateFileInformationDto } from './dto/create-file-information.dto';
import { UpdateFileInformationDto } from './dto/update-file-information.dto';
export declare class FileInformationService {
    create(createFileInformationDto: CreateFileInformationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFileInformationDto: UpdateFileInformationDto): string;
    remove(id: number): string;
}
