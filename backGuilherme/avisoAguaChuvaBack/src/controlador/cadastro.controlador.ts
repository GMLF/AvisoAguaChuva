import {Request,Response} from "express";
import { criarCadastro, lerCadastro } from "../service/cadastro.service";
import { Cadastro } from "../entity/Cadastro";

//Valida o tipo da requisição e manda pro service executar
export const criaCadastroControlador=async(req:Request,res:Response):Promise<Response>=>{
    const cadastro:Cadastro=await criarCadastro(req.body);
    return res.status(201).json(cadastro)
}

//Busca na tabela do banco e retorna todos os dados existentes nela
export const lerdCadastroControler=async(req:Request,res:Response):Promise<Response>=>{
    const cadastro:Cadastro[]=await lerCadastro()
    return res.status(201).json(cadastro)
}
