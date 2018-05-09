'use strict';

const helpers = require('../helpers'),
    formidable = require('formidable'),
    path = require('path'),
    uploader = require('../helpers/uploader');

module.exports = function (data) {
    return {


        createCity(req, res) {
            const city = req.body;
            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            } else {
                return Promise.resolve()
                    .then(() => {
                        return data.createCity(city);
                        // city.push(city);
                        res.send(city);

                    })
                    .catch(error => {
                        res.status(400)
                            .send(JSON.stringify({
                                validationErrors: helpers.errorHelper(error)
                            }));
                    });
            }
        },

        getCityById(req, res) {
            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            } else {
                return Promise.resolve()
                    .then(() => {
                        return data.getcityById(req.params.id)
                            .then(city => {
                                res.send(city);
                            });
                    });
            }
        },

        getAllCities(req, res) {
            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            } else {
                return Promise.resolve()
                    .then(() => {
                        return data.getAllCities(req.cities)
                            .then(cities => {
                                res.send(cities);
                            });
                    });
            }
        },









    };
};