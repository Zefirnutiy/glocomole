import { Client } from "src/organization/client/entities/client.entity";
import { File } from "src/organization/file/entities/file.entity";
import { PublicInfo } from "src/organization/public-info/entities/public-info.entity";
import { Question } from "src/organization/question/entities/question.entity";
import { Test } from "src/organization/test/entities/test.entity";
export declare class FileInformation {
    id: number;
    clientId: Client;
    fileId: File;
    publicInfoId: PublicInfo;
    testId: Test;
    questionId: Question;
}
