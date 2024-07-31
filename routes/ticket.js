var express = require('express');
var router = express.Router();

/* 1. Importe el módulo crypto */
let crypto = require('crypto');

/* 2. Cargue los modelos de acuerdo con la configuración de la conexión */
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('ticket', { title: 'Express' });
});

module.exports = router;