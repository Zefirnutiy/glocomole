import { Client } from "src/organization/client/entities/client.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PublicInfo {
    
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
    
    @OneToOne(()=>Client)
    @JoinColumn()
    clientId:   Client
}
