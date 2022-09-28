import { Department } from "src/organization/department/entities/department.entity";
import { Group } from "src/organization/group/entities/group.entity";
export declare class Client {
    id: number;
    firstName: string;
    lastName: string;
    patronymic: string;
    password: string;
    email: string;
    telephone: string;
    emailNotifications: boolean;
    manageCourses: boolean;
    manageUsers: boolean;
    aploadFiles: boolean;
    viewYourResults: boolean;
    viewOtherResults: boolean;
    departmentId: Department;
    groupId: Group;
    creatorId: Client;
}
