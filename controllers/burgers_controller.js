// ==========================================
// DEPENDENCIES
// ==========================================
var express = require('express');
var burgers = require('../models/burgers.js');
// ==========================================


// ==========================================
// EXPORT ROUTES
// ==========================================
module.exports = function(app) {
    // ROOT ROUTE
    app.get('/', function(request, response) {
        burgers.allBurgers(function(data) {
            response.render('index', {
                uneatenBurgers: data.uneaten,
                eatenBurgers: data.eaten
            });
        });
    });

    // API/BURGERS ROUTE
    app.get('/api/burgers', function(request, response) {
        burgers.allBurgers(function(data) {
            response.json(data);
        });
    });

    // DEFINE POST
    app.post('/', function(request, response) {
        var newBurger = request.body.burger;
        // IF NO BURGER, RETURN
        if (newBurger === '') {
            response.redirect('/');
            return;
        }
        // CREATE BURGER
        burgers.create(newBurger, function() {
            response.redirect('/');
        });
    });

    // DEFINE BURGER ID ROUTE
    app.get('/api/burgers/:id', function(request, response) {
        burgers.singleBurger(request.params.id, function(data) {
            response.json(data);
        });
    });

    // DEFINE BURGER UPDATE BY ID
    app.put('/:id', function(request, response) {
        burgers.update(request.params.id, function() {
            response.redirect('/');
        });
    });
};
// ==========================================