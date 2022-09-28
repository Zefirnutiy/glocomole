import { Client } from "src/organization/client/entities/client.entity";
import { Course } from "src/organization/course/entities/course.entity";
import { Test } from "src/organization/test/entities/test.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TestResult {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    passageTime:    Date
    
    @Column()
    assessment: string
    
    @Column()
    scores: number
    
    @Column()
    attempts:   number
    
    @Column()
    date:   Date
    
    @Column()
    time:   Date
    
    @OneToOne(()=>Course)
    @JoinColumn()
    courseId:   Course
    
    @OneToOne(()=>Test)
    @JoinColumn()
    testId: Test
    
    @OneToOne(()=>Client)
    @JoinColumn()
    clientId:  Client
}
