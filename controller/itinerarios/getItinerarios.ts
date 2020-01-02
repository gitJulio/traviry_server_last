import {Request, Response} from 'express';
import db from '../../configuracion/conexion_pg'

var getItinerarios = async function(req:Request, res:Response, next:Function){



     let detalle_itinerarios= await db.func('traviry.ft_view_itinerarios',req.body.id_usuario).catch((err: any)=>{
         console.log(err);
         res.send({status:false})
     })

    res.json(detalle_itinerarios[0]["ft_view_itinerarios"])

}

export = getItinerarios
