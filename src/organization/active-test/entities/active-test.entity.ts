import { Client } from "src/organization/client/entities/client.entity";
import { Test } from "src/organization/test/entities/test.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ActiveTest {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    date:   Date
    
    @Column()
    time:   Date
    
    @Column()
    dateClose:  Date
    
    @Column()
    timeClose:  Date
    
    @Column()
    attempts:   number
    
    @Column()
    testTypeId: number
    
    @OneToOne(()=>Test)
    @JoinColumn()
    testId: Test
    
    @ManyToOne(()=>Client)
    @JoinColumn()
    clientId: Client[]
}
