import { Organization } from "src/public/organization/entities/organization.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";

@Entity()
export class DeadLine {

    @PrimaryGeneratedColumn()
    Id: number
    
    @Column()
    Date: Date
    
    @Column()
    Time: Date
    
    @ManyToOne(() => Organization)
    @JoinColumn()
    OrganizationId: Organization
}
