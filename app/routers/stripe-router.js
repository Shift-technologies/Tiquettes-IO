'use strict';

module.exports = function (app, express, stripe) {
    let stripeRouter = new express.Router(),
        stripeController = require('../controllers/stripe-controller')(stripe);


    stripeRouter
        .post('/', stripeController.createCharge)
        .get('/:id', stripeController.getChargeById)
        .get('/user/:id', stripeController.getUserCharges)


















    app.use('/charges', stripeRouter);
};