'use strict';

const cities = require('states-cities-db');


module.exports = function () {
    return {

        getAllCountries(req, res) {
            const countries = cities.getCountries();
            res.send(countries);
        },

        getAllStates(req, res) {
            const name = 'nigeria';
            const countries = cities.getStates(`${name}`);
            res.send(countries);
        },
        
        getAllCities(req, res) {
            const name = 'nigeria_lagos';
            const countries = cities.getCities(`${name}`);
            res.send(countries);
        },




    };
};