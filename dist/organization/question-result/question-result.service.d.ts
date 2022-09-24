import { CreateQuestionResultDto } from './dto/create-question-result.dto';
import { UpdateQuestionResultDto } from './dto/update-question-result.dto';
export declare class QuestionResultService {
    create(createQuestionResultDto: CreateQuestionResultDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateQuestionResultDto: UpdateQuestionResultDto): string;
    remove(id: number): string;
}
