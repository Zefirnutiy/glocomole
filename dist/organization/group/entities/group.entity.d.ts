import { Department } from "src/organization/department/entities/department.entity";
export declare class Group {
    id: number;
    title: string;
    titleSingular: string;
    departmentId: Department;
}
