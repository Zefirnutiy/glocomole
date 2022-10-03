import { QuestionType } from "src/organization/question-type/entities/question-type.entity";
import { Test } from "src/organization/test/entities/test.entity";
export declare class Question {
    id: number;
    text: string;
    date: Date;
    time: Date;
    dateDel: Date;
    timeDel: Date;
    number: string;
    answerVariant: string;
    answerCorrect: string;
    testId: Test;
    questionTypeId: QuestionType;
    files: boolean;
}
