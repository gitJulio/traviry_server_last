import {Request, Response} from 'express';

var registraUsuario = async function(req:Request, res:Response, next:Function){
     console.log("aaaaa");
     
    res.json({
        ok:true,
        login:"Desde Registra Usuario"
    })
}

export = registraUsuario