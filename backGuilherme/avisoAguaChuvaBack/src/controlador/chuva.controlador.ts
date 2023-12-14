import {Request,Response} from "express";
import { criarChuva,lerChuva, } from "../service/chuva.service";
import { Chuva } from "../entity/Chuva";

//Valida o tipo da requisição e manda pro service executar
export const criaChuvaControlador=async(req:Request,res:Response):Promise<Response>=>{
    const chuva:Chuva=await criarChuva(req.body);
    return res.status(201).json(chuva)
}

//Busca na tabela do banco e retorna todos os dados existentes nela
export const lerChuvaControler=async(req:Request,res:Response):Promise<Response>=>{
    const chuva:Chuva[]=await lerChuva()
    return res.status(201).json(chuva)
}