import { Client } from "src/organization/client/entities/client.entity";
import { Question } from "src/organization/question/entities/question.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

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
    
    @OneToOne(()=>Question)
    @JoinColumn()
    questionId: Question
    
    @OneToOne(()=>Client)
    @JoinColumn()
    clientId:  Client
}
