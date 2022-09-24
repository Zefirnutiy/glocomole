import { CreatePublicInfoDto } from './dto/create-public-info.dto';
import { UpdatePublicInfoDto } from './dto/update-public-info.dto';
export declare class PublicInfoService {
    create(createPublicInfoDto: CreatePublicInfoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePublicInfoDto: UpdatePublicInfoDto): string;
    remove(id: number): string;
}
