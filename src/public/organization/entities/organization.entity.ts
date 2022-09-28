import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm'

import { Theme } from 'src/public/theme/entities/theme.entity'

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

    @OneToOne(() => Theme)
    @JoinColumn()
    themeId: Theme
}
