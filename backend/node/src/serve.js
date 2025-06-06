
import  http  from 'node:http';
import { bodyHandler } from './middlewares/bodyHandler.js';
import { routeHandler } from './middlewares/routeHandler.js';


const port = 3000;
//127.0.01:3000;

const server = http.createServer(async (request, response) => {

  await bodyHandler(request, response);
  routeHandler(request, response)
})//.listen(port) ou

server.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
  
});
