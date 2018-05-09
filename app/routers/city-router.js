'use strict';

module.exports = function (app, express, data) {
    let cityRouter = new express.Router(),
        cityController = require('../controllers/city-controller')(data);


    cityRouter
        .post('/', cityController.createCity)
        .get('/', cityController.getAllCities)
        .get('/:id', cityController.getCityById);


















    app.use('/cities', cityRouter);
};
