import {Request, Response} from 'express';
import db from '../../configuracion/conexion_pg'

var getLogin = async function(req:Request, res:Response, next:Function){


     let detalle_usuario= await db.func('traviry.ft_view_usuario',[req.body.correo.toLowerCase() , req.body.password.toLowerCase() ]).catch((err: any)=>{
         console.log(err);
         res.send({status:false})
     })

    res.json(detalle_usuario[0]["ft_view_usuario"])
}

export = getLogin
