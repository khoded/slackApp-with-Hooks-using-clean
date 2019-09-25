const handlers = require('../handlers/handler');
const express = require('express');
const api = express.Router();

const newDelivery = (usecase) => {
  const handler = new handlers(usecase);
  api.post('/error', (req, res) => {
    handler.reportError(req, res)
  })
}

module.exports = {
  newDelivery,
  api
}