import { InputType } from "src/organization/input-type/entities/input-type.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class QuestionType {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    title:  string
    
    @OneToOne(()=>InputType)
    @JoinColumn()
    inputTypeId:    number
}
