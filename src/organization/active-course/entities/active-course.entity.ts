import { Client } from "src/organization/client/entities/client.entity";
import { Course } from "src/organization/course/entities/course.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ActiveCourse {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    date: Date
    
    @Column()
    time: Date
    
    @Column()
    dateClose: Date
    
    @Column()
    timeClose: Date
    
    @OneToOne(()=>Course)
    @JoinColumn()
    courseId: Course
    
    @OneToOne(()=>Client)
    @JoinColumn()
    clientId: Client
}
