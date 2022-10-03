import { Organization } from "src/public/organization/entities/organization.entity";
export declare class Payment {
    number: number;
    money: number;
    date: Date;
    time: Date;
    users: number;
    statistics: boolean;
    protectionCheating: boolean;
    organizationId: Organization;
}
