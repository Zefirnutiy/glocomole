import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Session {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    userId: number
    
    @Column()
    ipAddress: string
    
    @Column()
    backendStartDateTime: Date
    
    @Column()
    stateChangeDateTime: Date
    
    @Column()
    stateId: number
}
