import {AppDataSource} from "../data-source"
import { Repository } from "typeorm"
import { Doacao } from "../entity/Doacao"
import { Necessitados } from "../entity/Necessitados"

export const criarDoacao=async(data:Doacao):Promise<Doacao>=>{
    const repo:Repository<Doacao>=AppDataSource.getRepository(Doacao)
    console.log(data)
    const doacao:Doacao=await repo.save(data)
    return doacao
}

export const lerDoacao=async():Promise<Doacao[]>=>{
    const repo:Repository<Doacao>=AppDataSource.getRepository(Doacao)
    const doacao:Doacao[]=await repo.find();
    return doacao
}

  