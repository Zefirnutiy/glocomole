import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TestResult {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    passageTime:    Date
    
    @Column()
    assessment: string
    
    @Column()
    scores: number
    
    @Column()
    attempts:   number
    
    @Column()
    date:   Date
    
    @Column()
    time:   Date
    
    @Column()
    courseId:   number
    
    @Column()
    testId: number
    
    @Column()
    clientId:   number
}
