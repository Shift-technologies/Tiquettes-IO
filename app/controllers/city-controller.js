const helpers = require('../helpers'),
    formidable = require('formidable'),
    path = require('path'),
    uploader = require('../helpers/uploader');


module.exports = function (data) {
    return {

        createCity(req, res) {
            const city = req.body;

            return Promise.resolve()
                .then(() => {
                    return data.createCity(city);
                    res.send(city);
                })
                .catch(error => {
                    res.sendStatus(400)
                        .send(JSON.stringify({
                            validationErrors: helpers.errorHelper(error)
                        }));
                });
        },


        getAllCities(req, res) {
            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            } else {

                return Promise.resolve()
                    .then(() => {
                        return data.getAllCities()
                            .then(cities => {
                                res.send(cities);
                            });
                    });
            }

        },


        getCityById(req, res) {
            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            } else {
                return Promise.resolve()
                    .then(() => {
                        return data.getCityById(req.params.id)
                            .then(city => {
                                res.send(city);
                            });
                    });
            }
        },




    };
};