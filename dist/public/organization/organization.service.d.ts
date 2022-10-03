import { Repository } from 'typeorm';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';
export declare class OrganizationService {
    private readonly orgRepository;
    constructor(orgRepository: Repository<Organization>);
    findAll(): Promise<Organization[]>;
    findOne(id: number): Promise<Organization[]>;
    update(id: number, updateOrganizationDto: UpdateOrganizationDto): string;
    remove(id: number): string;
}
