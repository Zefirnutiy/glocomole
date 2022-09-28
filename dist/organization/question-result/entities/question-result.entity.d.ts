import { Client } from "src/organization/client/entities/client.entity";
import { Question } from "src/organization/question/entities/question.entity";
export declare class QuestionResult {
    id: number;
    questionTypeId: number;
    date: Date;
    time: Date;
    scores: number;
    questionId: Question;
    clientId: Client;
}
