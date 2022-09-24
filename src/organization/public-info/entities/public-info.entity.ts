import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    
    @Column()
    clientId:   number
}
