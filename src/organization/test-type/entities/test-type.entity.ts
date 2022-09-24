import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TestType {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    title:  number
}
