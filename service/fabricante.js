import { fabricante } from "../data/data.js";

export const buscar = ()=>{
    return fabricante;
}

export const buscarPorId = (id)=>{
    return fabricante.find(fabricante => fabricante.id == id);
}