import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InputType {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    title: string
    
    @Column()
    type: string
}
