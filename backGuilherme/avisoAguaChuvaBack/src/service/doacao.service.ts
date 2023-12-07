import {AppDataSource} from "../data-source"
import { Repository } from "typeorm"
import { Doacao } from "../entity/Doacao"

//De acordo com a requisição, recebe os dados e salva na tabela se existente, caso contrário retorna um erro
export const criarDoacao=async(data:Doacao):Promise<Doacao>=>{
    const repo:Repository<Doacao>=AppDataSource.getRepository(Doacao)
    const doacao:Doacao=await repo.save(data)
    return doacao
}

//Busca na tabela do banco e retorna todos os dados existentes nela
export const lerDoacao=async():Promise<Doacao[]>=>{
    const repo:Repository<Doacao>=AppDataSource.getRepository(Doacao)
    const doacao:Doacao[]=await repo.find();
    return doacao
}

  