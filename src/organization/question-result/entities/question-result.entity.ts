import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class QuestionResult {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    questionTypeId: number
    
    @Column()
    date:   Date
    
    @Column()
    time:   Date
    
    @Column()
    scores: number
    
    @Column()
    questionId: number
    
    @Column()
    clientId:   number
}
