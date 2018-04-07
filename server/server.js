// server.js
const BASE_URL = 'json-server';
const SERVER_PORT = 3004;
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middleware = jsonServer.defaults();

server.use(middleware);
server.use('/' + BASE_URL, router);
server.listen(SERVER_PORT, () => {
  console.log('JSON Server is running')
})