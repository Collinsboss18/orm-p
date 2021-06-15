import { type } from "os";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user/user.entity";

@Entity()
export class Pet {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 500, nullable: false })
    name: string

    @ManyToOne(type => User, user => user.pets)
    owner: User
}