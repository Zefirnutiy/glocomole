import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Group {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    title:  string
    
    @Column()
    titleSingular:  string
    
    @Column()
    departmentId:   number
}
