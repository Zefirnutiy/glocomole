import { TestResultsService } from './test-results.service';
import { CreateTestResultDto } from './dto/create-test-result.dto';
import { UpdateTestResultDto } from './dto/update-test-result.dto';
export declare class TestResultsController {
    private readonly testResultsService;
    constructor(testResultsService: TestResultsService);
    create(createTestResultDto: CreateTestResultDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTestResultDto: UpdateTestResultDto): string;
    remove(id: string): string;
}
