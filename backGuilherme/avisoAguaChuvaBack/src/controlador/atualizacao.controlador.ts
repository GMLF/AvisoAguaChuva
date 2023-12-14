import {Request,Response} from "express";
import { alteraTabelaDoacao, alteraTabelaNecessitados } from "../service/atualizacao.service";
import { Necessitados } from "../entity/Necessitados";
import { Doacao } from "../entity/Doacao";

//Valida o tipo da requisição e manda pro service executar
export const alteraTabelaControlador=async(req:Request,res:Response):Promise<Response>=>{
    const statusAlterado:Necessitados=await alteraTabelaNecessitados(req.body);
    return res.status(201).json(statusAlterado)
}

export const alteraTabelaDoacaoControlador=async(req:Request,res:Response):Promise<Response>=>{
    const statusAlterado:Doacao=await alteraTabelaDoacao(req.body);
    return res.status(201).json(statusAlterado)
}

