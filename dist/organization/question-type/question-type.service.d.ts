import { CreateQuestionTypeDto } from './dto/create-question-type.dto';
import { UpdateQuestionTypeDto } from './dto/update-question-type.dto';
export declare class QuestionTypeService {
    create(createQuestionTypeDto: CreateQuestionTypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateQuestionTypeDto: UpdateQuestionTypeDto): string;
    remove(id: number): string;
}
