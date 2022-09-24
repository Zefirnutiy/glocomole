import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    
    @Column()
    organizationId: number
}
