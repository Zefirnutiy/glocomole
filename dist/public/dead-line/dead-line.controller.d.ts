import { DeadLineService } from './dead-line.service';
import { CreateDeadLineDto } from './dto/create-dead-line.dto';
import { UpdateDeadLineDto } from './dto/update-dead-line.dto';
export declare class DeadLineController {
    private readonly deadLineService;
    constructor(deadLineService: DeadLineService);
    create(createDeadLineDto: CreateDeadLineDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDeadLineDto: UpdateDeadLineDto): string;
    remove(id: string): string;
}
