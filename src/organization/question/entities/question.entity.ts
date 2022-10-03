import { QuestionType } from "src/organization/question-type/entities/question-type.entity";
import { Test } from "src/organization/test/entities/test.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Question {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    text: string
    
    @Column()
    date: Date
    
    @Column()
    time: Date
    
    @Column()
    dateDel: Date
    
    @Column()
    timeDel: Date
    
    @Column()
    number: string
    
    @Column()
    answerVariant: string
    
    @Column()
    answerCorrect: string
    
    @OneToOne(()=>Test)
    @JoinColumn()
    testId: Test
    
    @OneToOne(()=>QuestionType)
    @JoinColumn()
    questionTypeId: QuestionType
    
    @Column()
    files: boolean
}
