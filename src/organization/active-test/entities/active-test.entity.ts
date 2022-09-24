import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    
    @Column()
    testId: number
    
    @Column()
    clientId:   number
}
