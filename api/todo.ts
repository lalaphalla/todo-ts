/* eslint-disable @typescript-eslint/no-require-imports */
const jsonServer = require('json-server');
const db = require('../db.json');

module.exports = (req, res) => {
  const server = jsonServer.create();
  const router = jsonServer.router(db);
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  server(req, res);
};