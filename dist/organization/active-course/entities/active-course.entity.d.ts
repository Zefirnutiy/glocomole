import { Client } from "src/organization/client/entities/client.entity";
import { Course } from "src/organization/course/entities/course.entity";
export declare class ActiveCourse {
    id: number;
    date: Date;
    time: Date;
    dateClose: Date;
    timeClose: Date;
    courseId: Course;
    clientId: Client;
}
