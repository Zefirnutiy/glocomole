import { Client } from "src/organization/client/entities/client.entity";
import { File } from "src/organization/file/entities/file.entity";
import { PublicInfo } from "src/organization/public-info/entities/public-info.entity";
import { Question } from "src/organization/question/entities/question.entity";
import { Test } from "src/organization/test/entities/test.entity";
import { OneToOne, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FileInformation {
<<<<<<< HEAD
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    clientId:   number
=======
    
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(()=>Client)
    @JoinColumn()
    clientId: Client
>>>>>>> c40d4ec4383061476433efab7a035d08e4bef0ab
    
    @OneToOne(()=>File)
    @JoinColumn()
    fileId: File
    
    @OneToOne(()=>PublicInfo)
    @JoinColumn()
    publicInfoId: PublicInfo
    
    @OneToOne(()=>Test)
    @JoinColumn()
    testId: Test
    
    @OneToOne(()=>Question)
    @JoinColumn()
    questionId: Question
}
