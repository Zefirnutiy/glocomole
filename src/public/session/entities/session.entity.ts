import { State } from "src/public/state/entities/state.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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
    
    @OneToOne(()=>State)
    @JoinColumn()
    stateId: State
}
