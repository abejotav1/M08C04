const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const controller = {
    'home': (req, res) => {
        res.render('home.ejs')
    },
    'forms': (req, res) => {
        res.render('formulario.ejs')
    },
    'favoritos': (req, res) => {
        res.render('favoritas.ejs')
    }
    
}

module.exports = controller;