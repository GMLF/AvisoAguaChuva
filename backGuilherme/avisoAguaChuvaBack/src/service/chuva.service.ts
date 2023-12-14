import {AppDataSource} from "../data-source"
import { Repository } from "typeorm"
import { Chuva } from "../entity/Chuva"

//De acordo com a requisição, recebe os dados e salva na tabela se existente, caso contrário retorna um erro
export const criarChuva=async(data:Chuva):Promise<Chuva>=>{
    const repo:Repository<Chuva>=AppDataSource.getRepository(Chuva)
    const chuva:Chuva=await repo.save(data)
    return chuva
}

//Busca na tabela do banco e retorna todos os dados existentes nela
export const lerChuva=async():Promise<Chuva[]>=>{
    const repo:Repository<Chuva>=AppDataSource.getRepository(Chuva)
    const chuva:Chuva[]=await repo.find();
    return chuva
}