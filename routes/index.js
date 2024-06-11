const Routes = require('express').Router();

const rastreamentoController = require('../controller/rastreamentoController');

Routes.get('/track-by-cpf/:cpf', rastreamentoController.index);

module.exports = Routes;