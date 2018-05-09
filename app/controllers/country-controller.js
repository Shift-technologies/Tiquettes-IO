'use strict';

const helpers = require('../helpers'),
    formidable = require('formidable'),
    path = require('path'),
    uploader = require('../helpers/uploader');

module.exports = function (data) {
    return {


        createCountry(req, res) {
            const country = req.body;
            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            } else {
                return Promise.resolve()
                    .then(() => {
                        return data.createCountry(country);
                        res.send(country);
                    })
                    .catch(error => {
                        res.status(400)
                            .send(JSON.stringify({
                                validationErrors: helpers.errorHelper(error)
                            }));
                    });
            }
        },

        getCountryById(req, res) {
            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            } else {
                return Promise.resolve()
                    .then(() => {
                        return data.getCountryById(req.params.id)
                            .then(country => {
                                res.send(country);
                            });
                    });
            }
        },

        getAllCountries(req, res) {
            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            } else {
                return Promise.resolve()
                    .then(() => {
                        return data.getAllCountries(req.countries)
                            .then(countries => {
                                res.send(countries);
                            });
                    });
            }
        },









    };
};