import {Router} from 'express';
const router=Router();

/********** Control de Usuarios  **************/ 
var usuarioRutas=require('../controller/usuario/usuario-controller')
var itinerariosRutas=require('../controller/itinerarios/itinerarios-controller')


/*********Llamada a funciones de usuarios ************/ 
router.post('/login', usuarioRutas.getLogin)  
router.get('/registro', usuarioRutas.registraUsuario)
router.post('/getDataUsuario', usuarioRutas.getDataUsuario)


/***********Llamada a funciones de itinerarios**********/
router.post('/getItinerarios', itinerariosRutas.getItinerarios)
router.post('/insertItinerarios', itinerariosRutas.insertItinerarios)


export default router;