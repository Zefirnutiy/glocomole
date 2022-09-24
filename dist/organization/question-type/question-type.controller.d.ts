import { QuestionTypeService } from './question-type.service';
import { CreateQuestionTypeDto } from './dto/create-question-type.dto';
import { UpdateQuestionTypeDto } from './dto/update-question-type.dto';
export declare class QuestionTypeController {
    private readonly questionTypeService;
    constructor(questionTypeService: QuestionTypeService);
    create(createQuestionTypeDto: CreateQuestionTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateQuestionTypeDto: UpdateQuestionTypeDto): string;
    remove(id: string): string;
}
