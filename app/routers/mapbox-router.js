'use strict';

module.exports = function (app, express, mapbox) {
    let mapboxRouter = new express.Router(),
        mapboxController = require('../controllers/mapbox-controller')(mapbox);


    mapboxRouter
        .get('/:id', mapboxController.getMap)

















    app.use('/maps', mapboxRouter);
};