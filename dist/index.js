"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./clases/server"));
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
//Servidor
const server = new server_1.default();
//BodyParser
server.app.use(body_parser_1.default.json());
server.app.use(cors_1.default({ origin: true, credentials: true }));
//Rutas
server.app.use('/api', router_1.default);
// server.app.use('/', function(req, res, next) {
//   var f = new Date();
//   let aa = f.getFullYear()
//   let anio = `© ${aa}`
//   res.render('index', {
//     copyr: anio,
//     title: "Traviry"
//   });
// });
//Inicio de servidor
server.start(() => {
    console.log(`Servidor corriendo en puerto ${server.port}`);
});
