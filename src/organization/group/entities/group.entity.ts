import { Department } from "src/organization/department/entities/department.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Group {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    title:  string
    
    @Column()
    titleSingular:  string
    
    @ManyToOne(()=>Department)
    @JoinColumn()
    departmentId: Department
}
