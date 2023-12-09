import { text } from "stream/consumers"
import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from "typeorm"

@Entity({name:"cadastro"})

export class Cadastro {

    @PrimaryColumn()
    email:string

    @Column()
    nome: string
        
    @Column()
    senha:string
}
