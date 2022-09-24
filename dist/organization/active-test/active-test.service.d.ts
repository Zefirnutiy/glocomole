import { CreateActiveTestDto } from './dto/create-active-test.dto';
import { UpdateActiveTestDto } from './dto/update-active-test.dto';
export declare class ActiveTestService {
    create(createActiveTestDto: CreateActiveTestDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateActiveTestDto: UpdateActiveTestDto): string;
    remove(id: number): string;
}
