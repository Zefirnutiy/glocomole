import { InputTypeService } from './input-type.service';
import { CreateInputTypeDto } from './dto/create-input-type.dto';
import { UpdateInputTypeDto } from './dto/update-input-type.dto';
export declare class InputTypeController {
    private readonly inputTypeService;
    constructor(inputTypeService: InputTypeService);
    create(createInputTypeDto: CreateInputTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateInputTypeDto: UpdateInputTypeDto): string;
    remove(id: string): string;
}
