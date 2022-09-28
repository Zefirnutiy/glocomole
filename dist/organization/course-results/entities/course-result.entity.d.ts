import { Client } from "src/organization/client/entities/client.entity";
import { Course } from "src/organization/course/entities/course.entity";
export declare class CourseResult {
    id: number;
    assessment: string;
    scores: number;
    numberTests: number;
    passageTime: Date;
    date: Date;
    time: Date;
    clientId: Client;
    courseId: Course;
}
