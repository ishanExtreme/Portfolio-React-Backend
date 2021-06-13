const express = require('express');
require('dotenv').config();

const error = require('../middleware/error');
const projects = require('../routes/projects');
const plans = require('../routes/plans');
const quote = require('../routes/quote');

module.exports = (app)=>{

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // allow same origin(remove in prod env)
    
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    

    // routes
    app.use('/api/projects', projects);
    app.use('/api/plans', plans);
    app.use('/api/quote', quote);
    app.use(error);
}