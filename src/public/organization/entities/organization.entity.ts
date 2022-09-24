import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm'

@Entity()
export class Organization {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    
    title: string
    
    @Column()
    password: string
    
    @Column()
    email: string
    
    @Column()
    emailNotification: boolean
    
    @Column()
    key: string
    
    @Column()
    userLimit: number
    
    @Column()
    statistic: boolean
    
    @Column()
    protectionCh: boolean
    
    @Column()
    date: Date
    
    @Column()
    time: Date

    @Column()
    themeId: number
}
