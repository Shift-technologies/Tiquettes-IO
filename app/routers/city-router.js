'use strict';

module.exports = function (app, express, data) {
    let cityRouter = new express.Router(),
        cityController = require('../controllers/city-controller')(data);


    cityRouter
        .get('/', cityController.getAllCities)
        .get('/:id', cityController.getCityById)
        .post('/register', cityController.createCity)


















    app.use('/city', cityRouter);
};