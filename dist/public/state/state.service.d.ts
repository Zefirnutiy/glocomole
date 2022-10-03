import { Repository } from 'typeorm';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { State } from './entities/state.entity';
export declare class StateService {
    private readonly orgRepository;
    constructor(orgRepository: Repository<State>);
    create(createStateDto: CreateStateDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateStateDto: UpdateStateDto): string;
    remove(id: number): string;
}
