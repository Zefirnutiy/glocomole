import { Client } from "src/organization/client/entities/client.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    title:  string
    
    @Column()
    text:   string
    
    @Column()
    files:  boolean
    
    @Column()
    date:   Date
    
    @Column()
    time:   Date
    
    @Column()
    dateDel:    Date
    
    @Column()
    timeDel:    Date
    
    @ManyToOne(()=>Client)
    @JoinColumn()
    clientId:   Client
}
