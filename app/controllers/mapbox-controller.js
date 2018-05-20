'use strict';

const helpers = require('../helpers'),
    formidable = require('formidable'),
    path = require('path'),
    uploader = require('../helpers/uploader');


const
    MapboxClient = require('mapbox'),
    client = new MapboxClient('pk.eyJ1IjoiaWFtdGVsbyIsImEiOiJjamd6dDZ4Y20wNWVkMndubHhvZDJnZzlxIn0.W8l4YbUd7GuZHD9QpHqdFw');



module.exports = function (stripe) {
    return {



        getMap(req, res) {

            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            } else {

                client.geocodeForward(
                    'Chester, NJ'
                ).then((res) => {
                    //retrieve charge
                    res.send(res);
                }).catch((err) => {
                    // Deal with an error
                    res.status(400)
                        .send(JSON.stringify({
                            validationErrors: helpers.errorHelper(err)
                        }));
                });

            }
        },






    };
};