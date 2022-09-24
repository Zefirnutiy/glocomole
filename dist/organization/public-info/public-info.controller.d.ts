import { PublicInfoService } from './public-info.service';
import { CreatePublicInfoDto } from './dto/create-public-info.dto';
import { UpdatePublicInfoDto } from './dto/update-public-info.dto';
export declare class PublicInfoController {
    private readonly publicInfoService;
    constructor(publicInfoService: PublicInfoService);
    create(createPublicInfoDto: CreatePublicInfoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePublicInfoDto: UpdatePublicInfoDto): string;
    remove(id: string): string;
}
