import Server from "./clases/server";
import router  from "./routes/router";
import bodyParser from 'body-parser';
import cors from 'cors';

//Servidor
const server = new Server();

//BodyParser
server.app.use(bodyParser.json());

server.app.use(cors({origin:true, credentials:true}))

//Rutas
server.app.use('/api', router);

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
server.start(()=>{
  console.log(`Servidor corriendo en puerto ${server.port}`)
});
