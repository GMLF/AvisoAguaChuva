import {AppDataSource} from "../data-source"
import { Repository } from "typeorm"
import { Cadastro } from "../entity/Cadastro"

//De acordo com a requisição, recebe os dados e salva na tabela se existente, caso contrário retorna um erro
export const criarCadastro=async(data:Cadastro):Promise<Cadastro>=>{
    const repo:Repository<Cadastro>=AppDataSource.getRepository(Cadastro)
    const cadastro:Cadastro=await repo.save(data)
    return cadastro
}

//Busca na tabela do banco e retorna todos os dados existentes nela
export const lerCadastro=async():Promise<Cadastro[]>=>{
    const repo:Repository<Cadastro>=AppDataSource.getRepository(Cadastro)
    const cadastro:Cadastro[]=await repo.find();
    return cadastro
}

  