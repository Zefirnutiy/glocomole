import { ActiveTestService } from './active-test.service';
import { CreateActiveTestDto } from './dto/create-active-test.dto';
import { UpdateActiveTestDto } from './dto/update-active-test.dto';
export declare class ActiveTestController {
    private readonly activeTestService;
    constructor(activeTestService: ActiveTestService);
    create(createActiveTestDto: CreateActiveTestDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateActiveTestDto: UpdateActiveTestDto): string;
    remove(id: string): string;
}
