import { Repository } from 'typeorm';
import { CreateDeadLineDto } from './dto/create-dead-line.dto';
import { UpdateDeadLineDto } from './dto/update-dead-line.dto';
import { DeadLine } from './entities/dead-line.entity';
export declare class DeadLineService {
    private readonly deadLineRepository;
    constructor(deadLineRepository: Repository<DeadLine>);
    create(createDeadLineDto: CreateDeadLineDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDeadLineDto: UpdateDeadLineDto): string;
    remove(id: number): string;
}
