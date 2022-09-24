import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    
    @Column()
    testId: number
    
    @Column()
    questionTypeId: number
    
    @Column()
    files: boolean
}
