import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FileInformation {
    
    @Column()
    clientId:   number
    
    @Column()
    fileId: number
    
    @Column()
    publicInfoId:   number
    
    @Column()
    testId: number
    
    @Column()
    questionId: number
}
