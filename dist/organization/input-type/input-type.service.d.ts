import { CreateInputTypeDto } from './dto/create-input-type.dto';
import { UpdateInputTypeDto } from './dto/update-input-type.dto';
export declare class InputTypeService {
    create(createInputTypeDto: CreateInputTypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateInputTypeDto: UpdateInputTypeDto): string;
    remove(id: number): string;
}
