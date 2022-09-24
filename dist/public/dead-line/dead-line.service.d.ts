import { CreateDeadLineDto } from './dto/create-dead-line.dto';
import { UpdateDeadLineDto } from './dto/update-dead-line.dto';
export declare class DeadLineService {
    create(createDeadLineDto: CreateDeadLineDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDeadLineDto: UpdateDeadLineDto): string;
    remove(id: number): string;
}
