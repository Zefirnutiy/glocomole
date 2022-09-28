import { OrganizationService } from './organization.service';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
export declare class OrganizationController {
    private readonly organizationService;
    constructor(organizationService: OrganizationService);
    findAll(): Promise<import("./entities/organization.entity").Organization[]>;
    findOne(id: string): Promise<import("./entities/organization.entity").Organization[]>;
    update(id: string, updateOrganizationDto: UpdateOrganizationDto): string;
    remove(id: string): string;
}
