'use strict';

const helpers = require('../helpers'),
    formidable = require('formidable'),
    path = require('path'),
    uploader = require('../helpers/uploader');


const
    keyPublishable = 'pk_test_rkC2qB4yxvVOphmc3kbRj2uh',
    keySecret = 'sk_test_8wkbMEvw4q1pIQ516LbK2UOE',
    stripe = require('stripe')(keySecret);


module.exports = function (stripe) {
    return {


        createCharge(req, res) {
            // return Promise.resolve()
            stripe.customers.create({
                email: req.body.email
            }).then((customer) => {
                return stripe.customers.createSource(customer.id, {
                    source: req.body.stripeToken
                });
            }).then((source) => {
                return stripe.charges.create({
                    amount: 1600,
                    currency: 'usd',
                    customer: source.customer
                });
            }).then((charge) => {
                // New charge created on a new customer
                res.send(charge);
            }).catch((err) => {
                // Deal with an error
                res.status(400)
                    .send(JSON.stringify({
                        validationErrors: helpers.errorHelper(err)
                    }));
            });
        },


        getChargeById(req, res) {
            stripe.charges.retrieve(
                req.params.id
            ).then((charge) => {
                //retrieve charge
                res.send(charge);
            }).catch((err) => {
                // Deal with an error
                res.status(400)
                    .send(JSON.stringify({
                        validationErrors: helpers.errorHelper(err)
                    }));
            });
        },



        getUserCharges(req, res) {
            stripe.charges.retrieve({
                customer: req.params.id
            }).then((charges) => {
                //retrieve charge
                res.send(charges);
            }).catch((err) => {
                // Deal with an error
                res.status(400)
                    .send(JSON.stringify({
                        validationErrors: helpers.errorHelper(err)
                    }));
            });
        },





    };
};