import {Request,Response} from "express";
import { criarDoacao,lerDoacao } from "../service/doacao.service";
import { Doacao } from "../entity/Doacao";

export const criaDoacaoControlador=async(req:Request,res:Response):Promise<Response>=>{
    const doacao:Doacao=await criarDoacao(req.body);
    return res.status(201).json(doacao)
}

export const lerdoacaoControler=async(req:Request,res:Response):Promise<Response>=>{
    const doacao:Doacao[]=await lerDoacao()
    return res.status(201).json(doacao)
}
