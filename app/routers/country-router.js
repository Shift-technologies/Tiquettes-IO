'use strict';

module.exports = function (app, express, data) {
    let countryRouter = new express.Router(),
        countryController = require('../controllers/country-controller')(data);


    countryRouter
        .post('/', countryController.createCountry)
        .get('/', countryController.getAllCountries)
        .get('/:id', countryController.getCountryById)


















    app.use('/countries', countryRouter);
};
