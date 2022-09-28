import { Department } from "src/organization/department/entities/department.entity";
import { Group } from "src/organization/group/entities/group.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(()=>Department)
    @JoinColumn()
    departmentId: Department

    @ManyToOne(()=>Group)
    @JoinColumn()
    groupId: Group

    @OneToOne(()=>Client)
    @JoinColumn()
    creatorId: Client
}
