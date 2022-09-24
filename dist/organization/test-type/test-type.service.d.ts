import { CreateTestTypeDto } from './dto/create-test-type.dto';
import { UpdateTestTypeDto } from './dto/update-test-type.dto';
export declare class TestTypeService {
    create(createTestTypeDto: CreateTestTypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTestTypeDto: UpdateTestTypeDto): string;
    remove(id: number): string;
}
