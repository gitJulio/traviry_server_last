import {Request, Response} from 'express';
import db from '../../configuracion/conexion_pg'

var getDataUsuario = async function(req:Request, res:Response, next:Function){



     let detalle_usuario= await db.func('traviry.ft_view_detalle_usuario',req.body.id_usuario).catch(err=>{
         console.log(err);
         res.send({status:false})
     })

    res.json(detalle_usuario[0]["ft_view_detalle_usuario"])
}

export = getDataUsuario
