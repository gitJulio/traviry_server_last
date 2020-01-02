"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const conexion_pg_1 = __importDefault(require("../../configuracion/conexion_pg"));
var insertItinerarios = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let detalle_itinerarios = yield conexion_pg_1.default.func('traviry.ft_proc_itinerario_insert', JSON.stringify(req.body)).catch((err) => {
            console.log(err);
            res.send({ status: false });
        });
        res.json(detalle_itinerarios[0]["ft_proc_itinerario_insert"]);
    });
};
module.exports = insertItinerarios;
