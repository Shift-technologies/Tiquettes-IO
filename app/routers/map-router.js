'use strict';

module.exports = function (app, express, data) {
    let mapRouter = new express.Router(),
        mapController = require('../controllers/map-controller')(data);


    mapRouter
        .get('/countries', mapController.getAllCountries)
        .get('/states', mapController.getAllStates)
        .get('/cities', mapController.getAllCities)


















    app.use('/map', mapRouter);
};
