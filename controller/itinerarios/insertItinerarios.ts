import {Request, Response} from 'express';
import db from '../../configuracion/conexion_pg'

var insertItinerarios = async function(req:Request, res:Response, next:Function){



     let detalle_itinerarios= await db.func('traviry.ft_proc_itinerario_insert',JSON.stringify(req.body)).catch(err=>{
         console.log(err);
         res.send({status:false})
     })

    res.json(detalle_itinerarios[0]["ft_proc_itinerario_insert"])

}
/*aaaaaa*/
export = insertItinerarios
