import { parseRoute } from "./utils/parseRouter.js";

export const routes = [
  {
    method: 'GET',
    path: '/produtos',
    controller: (request, response) => {
      return response.writeHead(200).end('Lista de produtos')
    }
  },
  {
    method: 'POST',
    path: '/produtos',
    controller: (request, response) => {
      return response.writeHead(201).end(JSON.stringify(request.body))
    }
  },
  {
    method: 'DELETE',
    path: '/produtos/:id',
    controller: (request, response) => {
      return response.writeHead(200).end(`Produto de id ${request.params.id} foi removido`)
    }
  }
].map(route => ({
  ...route,
  path: parseRoute(route.path)
}));