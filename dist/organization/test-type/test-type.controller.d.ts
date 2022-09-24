import { TestTypeService } from './test-type.service';
import { CreateTestTypeDto } from './dto/create-test-type.dto';
import { UpdateTestTypeDto } from './dto/update-test-type.dto';
export declare class TestTypeController {
    private readonly testTypeService;
    constructor(testTypeService: TestTypeService);
    create(createTestTypeDto: CreateTestTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTestTypeDto: UpdateTestTypeDto): string;
    remove(id: string): string;
}
