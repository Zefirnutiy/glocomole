import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class File {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    Date:   Date
    
    @Column()
    time:   Date
    
    @Column()
    dateDel:    Date
    
    @Column()
    timeDel:    Date
    
    @Column()
    fileName:   string
    
    @Column()
    fileNameTmp:    string
}
