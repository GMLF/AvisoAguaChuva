import {AppDataSource} from "../data-source"
import { Repository } from "typeorm"
import { Necessitados } from "../entity/Necessitados"

export const criarNecessitados=async(data:Necessitados):Promise<Necessitados>=>{
    const repo:Repository<Necessitados>=AppDataSource.getRepository(Necessitados)
    console.log(data)
    const necessitados:Necessitados=await repo.save(data)
    return necessitados
}

export const lerNecessitados=async():Promise<Necessitados[]>=>{
    const repo:Repository<Necessitados>=AppDataSource.getRepository(Necessitados)
    const necessitados:Necessitados[]=await repo.find();
    return necessitados
}
  