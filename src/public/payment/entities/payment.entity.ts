import { Organization } from "src/public/organization/entities/organization.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    number: number
    
    @Column()
    money: number
    
    @Column()
    date: Date
    
    @Column()
    time: Date
    
    @Column()
    users: number
    
    @Column()
    statistics: boolean
    
    @Column()
    protectionCheating: boolean
    
    @ManyToOne(()=>Organization)
    @JoinColumn()
    organizationId: Organization
}
