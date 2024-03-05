import express from 'express';
import { listar, consultarPorId } from './service/veiculo.js';
import { buscar, buscarPorId } from './service/fabricante.js';


const app = express();

app.get('/veiculo',(req,res)=>{
    res.status(200).json(listar());
});
app.get('/fabricante',(req,res)=>{
    res.status(200).json(buscar());
});

app.get('/veiculo/:id',(req,res)=>{
    let id = req.params.id;
    let resultConsulta = consultarPorId(id);
    if(resultConsulta){
        res.status(200).json(resultConsulta);
    }
    else{
        res.status(404).json({"erro":"recurso não encontrado"});
    }
});
app.get('/fabricante/:id',(req,res)=>{
    let id = req.params.id;
    let resultConsulta = buscarPorId(id);
    if(resultConsulta){
        res.status(200).json(resultConsulta);
    }
    else{
        res.status(404).json({"erro":"recurso não encontrado"});
    }
});

app.listen(80);