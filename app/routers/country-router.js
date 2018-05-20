'use strict';

module.exports = function (app, express, data) {
    let countryRouter = new express.Router(),
        countryController = require('../controllers/country-controller')(data);


    countryRouter
        .get('/', countryController.getAllCountries)
        .get('/:id', countryController.getCountryById)
        .post('/register', countryController.createCountry)


















    app.use('/country', countryRouter);
};