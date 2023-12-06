import {Request,Response} from "express";
import { Necessitados } from "../entity/Necessitados";
import { criarNecessitados, lerNecessitados } from "../service/necessitados.service";

export const criarNecessitadosControlador=async(req:Request,res:Response):Promise<Response>=>{
    const necessitados:Necessitados=await criarNecessitados(req.body);
    return res.status(201).json(necessitados)
}

export const lerNecessitadosControler=async(req:Request,res:Response):Promise<Response>=>{
    const necessitados:Necessitados[]=await lerNecessitados()
    return res.status(201).json(necessitados)
}
