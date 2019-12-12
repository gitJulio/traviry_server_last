"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
/********** Control de Usuarios  **************/
var usuarioRutas = require('../controller/usuario/usuario-controller');
var itinerariosRutas = require('../controller/itinerarios/itinerarios-controller');
/*********Llamada a funciones de usuarios ************/
router.post('/login', usuarioRutas.getLogin);
router.get('/registro', usuarioRutas.registraUsuario);
router.post('/getDataUsuario', usuarioRutas.getDataUsuario);
/***********Llamada a funciones de itinerarios**********/
router.post('/getItinerarios', itinerariosRutas.getItinerarios);
router.post('/insertItinerarios', itinerariosRutas.insertItinerarios);
exports.default = router;
