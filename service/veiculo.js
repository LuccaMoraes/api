import {veiculo} from '../data/data.js'

export const listar = ()=>{
    return veiculo;
}

export const consultarPorId = (id)=>{
    return veiculo.find(veiculo => veiculo.id == id);
}