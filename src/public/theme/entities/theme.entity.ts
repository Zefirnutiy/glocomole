import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class Theme {
    @PrimaryGeneratedColumn()
    id:    number

    @Column()
    title: string
}
