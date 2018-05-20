'use strict';

const helpers = require('../helpers'),
    formidable = require('formidable'),
    path = require('path'),
    uploader = require('../helpers/uploader');

const cities = require('states-cities-db');


module.exports = function () {
    return {

        getAllCountries(req, res) {
            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            } else {

                const countries = cities.getCountries();
                res.send(countries);

            }
        },

        getAllStates(req, res) {
            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            } else {

                const name = req.params.name;
                const states = cities.getStates(`${name}`);
                res.send(states);

            }
        },

        getAllCities(req, res) {
            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            } else {

                const name = req.params.name;
                const cities = cities.getCities(`${name}`);
                res.send(cities);

            }
        },






    };
};