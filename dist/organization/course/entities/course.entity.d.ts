import { Client } from "src/organization/client/entities/client.entity";
export declare class Course {
    id: number;
    title: string;
    text: string;
    files: boolean;
    date: Date;
    time: Date;
    dateDel: Date;
    timeDel: Date;
    clientId: Client;
}
