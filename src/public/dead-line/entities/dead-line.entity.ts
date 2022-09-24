import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DeadLine {

    @PrimaryGeneratedColumn()
    Id: number
    
    @Column()
    Date: Date
    
    @Column()
    Time: Date
    
    @Column()
    OrganizationId: number
}
