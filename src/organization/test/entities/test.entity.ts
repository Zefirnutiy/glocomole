import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Test {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    title:  string
    
    @Column()
    text:   string
    
    @Column()
    files:  boolean
    
    @Column()
    Date:   Date
    
    @Column()
    time:   Date
    
    @Column()
    dateDel:    Date
    
    @Column()
    timeDel:    Date
}
