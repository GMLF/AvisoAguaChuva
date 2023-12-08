import { text } from "stream/consumers"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name:"cadastro"})
export class Cadastro {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email:string
    
    @Column()
    senha:string
}
