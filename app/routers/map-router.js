'use strict';

module.exports = function (app, express, data) {
    let mapRouter = new express.Router(),
        mapController = require('../controllers/map-controller')(data);


    mapRouter
        .get('/countries', mapController.getAllCountries)
        .post('/states/:name', mapController.getAllStates)
        .post('/cities/:name', mapController.getAllCities)


















    app.use('/map', mapRouter);
};