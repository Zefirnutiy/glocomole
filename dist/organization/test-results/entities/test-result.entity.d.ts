import { Client } from "src/organization/client/entities/client.entity";
import { Course } from "src/organization/course/entities/course.entity";
import { Test } from "src/organization/test/entities/test.entity";
export declare class TestResult {
    id: number;
    passageTime: Date;
    assessment: string;
    scores: number;
    attempts: number;
    date: Date;
    time: Date;
    courseId: Course;
    testId: Test;
    clientId: Client;
}
