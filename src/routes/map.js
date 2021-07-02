const express = require('express');
const mapper = require('../services/mapper');

const router = express.Router();

function set() {
  /* rutas de mockapi */
  router.post('/', mapper.mapear);
  return router;
}

module.exports = {
  set,
};
