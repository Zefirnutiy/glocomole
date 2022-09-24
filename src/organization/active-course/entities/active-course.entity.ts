import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    
    @Column()
    courseId: number
    
    @Column()
    clientId: number
}
