import { QuestionResultService } from './question-result.service';
import { CreateQuestionResultDto } from './dto/create-question-result.dto';
import { UpdateQuestionResultDto } from './dto/update-question-result.dto';
export declare class QuestionResultController {
    private readonly questionResultService;
    constructor(questionResultService: QuestionResultService);
    create(createQuestionResultDto: CreateQuestionResultDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateQuestionResultDto: UpdateQuestionResultDto): string;
    remove(id: string): string;
}
