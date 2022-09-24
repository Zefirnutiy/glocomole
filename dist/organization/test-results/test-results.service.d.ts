import { CreateTestResultDto } from './dto/create-test-result.dto';
import { UpdateTestResultDto } from './dto/update-test-result.dto';
export declare class TestResultsService {
    create(createTestResultDto: CreateTestResultDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTestResultDto: UpdateTestResultDto): string;
    remove(id: number): string;
}
