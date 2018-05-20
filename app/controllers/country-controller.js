const helpers = require('../helpers'),
    formidable = require('formidable'),
    path = require('path'),
    uploader = require('../helpers/uploader');


module.exports = function (data) {
    return {

        createCountry(req, res) {
            const country = req.body;

            return Promise.resolve()
                .then(() => {
                    return data.createCountry(country)
                        .then(country => {
                            res.send(country);
                        });
                })
                .catch(error => {
                    res.sendStatus(400)
                        .send(JSON.stringify({
                            validationErrors: helpers.errorHelper(error)
                        }));
                });
        },


        getAllCountries(req, res) {
            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            } else {

                return Promise.resolve()
                    .then(() => {
                        return data.getAllCountries()
                            .then(countries => {
                                res.send(countries);
                            });
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




    };
};