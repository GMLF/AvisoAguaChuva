import { text } from "stream/consumers"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name:"doacao"})
export class Doacao {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    telefone: string

    @Column()
    email:string

    @Column()
    endereco:string

    @Column()
    cidade:string

    @Column()
    estado:string

    @Column()
    cep:string

    @Column({type:"text"})
    listaDoacao:string
}
