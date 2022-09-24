import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    
    @Column()
    clientId:   number
    
    @Column()
    courseId:   number
}
