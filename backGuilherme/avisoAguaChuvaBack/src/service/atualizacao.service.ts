import {AppDataSource} from "../data-source"
import { Repository } from "typeorm"

import { Necessitados } from "../entity/Necessitados"
import { Doacao } from "../entity/Doacao"


export const alteraTabelaNecessitados=async(data:Necessitados):Promise<Necessitados>=>{
    const repo:Repository<Necessitados>=AppDataSource.getRepository(Necessitados)
    const user: Necessitados  = await repo.findOne({where:{email:data.email}});
    user.status=false
    const necessitados:Necessitados=await repo.save(user)
    return necessitados
}

export const alteraTabelaDoacao=async(data:Doacao):Promise<Doacao>=>{
    const repo:Repository<Doacao>=AppDataSource.getRepository(Doacao)
    const user: Doacao  = await repo.findOne({where:{email:data.email}});
    console.log(user)
    user.status=false
    const doacao:Doacao=await repo.save(user)
    return doacao
}

  