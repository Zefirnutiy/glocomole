import { Client } from "src/organization/client/entities/client.entity";
import { Test } from "src/organization/test/entities/test.entity";
export declare class ActiveTest {
    id: number;
    date: Date;
    time: Date;
    dateClose: Date;
    timeClose: Date;
    attempts: number;
    testTypeId: number;
    testId: Test;
    clientId: Client[];
}
