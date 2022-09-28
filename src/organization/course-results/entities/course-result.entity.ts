import { Client } from "src/organization/client/entities/client.entity";
import { Course } from "src/organization/course/entities/course.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CourseResult {

    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    assessment: string
    
    @Column()
    scores: number
    
    @Column()
    numberTests:    number
    
    @Column()
    passageTime:    Date
    
    @Column()
    date:   Date
    
    @Column()
    time:   Date
    
    @OneToOne(()=>Client)
    @JoinColumn()
    clientId:   Client
    
    @OneToOne(()=>Course)
    @JoinColumn()
    courseId:   Course
}
