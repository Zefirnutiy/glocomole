import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class QuestionType {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    title:  string
    
    @Column()
    inputTypeId:    number
}
