import { text } from "stream/consumers"
import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from "typeorm"

@Entity({name:"chuva"})

export class Chuva {

    @PrimaryColumn()
    cidade:string

    @Column()
    precip: string

    @Column()
    alerta:string
}