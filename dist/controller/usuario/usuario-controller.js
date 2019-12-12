"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const getLogin_1 = __importDefault(require("./getLogin"));
const registraUsuario_1 = __importDefault(require("./registraUsuario"));
const getDataUsuario_1 = __importDefault(require("./getDataUsuario"));
module.exports = {
    getLogin: getLogin_1.default,
    registraUsuario: registraUsuario_1.default,
    getDataUsuario: getDataUsuario_1.default
};
