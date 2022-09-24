import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    firstName: string
    
    @Column()
    lastName: string
    
    @Column()
    patronymic: string
    
    @Column()
    password: string
    
    @Column()
    email: string
    
    @Column()
    telephone: string
    
    @Column()
    emailNotifications: boolean
    
    @Column()
    manageCourses: boolean
    
    @Column()
    manageUsers: boolean
    
    @Column()
    aploadFiles: boolean
    
    @Column()
    viewYourResults: boolean
    
    @Column()
    viewOtherResults: boolean
    
    @Column()
    departmentId: number
    
    @Column()
    groupId: number
    
    @Column()
    creatorId: number
}
