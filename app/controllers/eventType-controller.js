const helpers = require('../helpers'),
    formidable = require('formidable'),
    path = require('path'),
    uploader = require('../helpers/uploader');


module.exports = function (data) {
    return {


        createEventType(req, res) {
            const eventType = req.body;

            return Promise.resolve()
                .then(() => {
                    return data.createEventType(eventType)
                        .then(eventType => {
                            res.send(eventType);
                        });
                })
                .catch(error => {
                    res.sendStatus(400)
                        .send(JSON.stringify({
                            validationErrors: helpers.errorHelper(error)
                        }));
                });
        },

        getAllEventTypes(req, res) {
            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            } else {

                return Promise.resolve()
                    .then(() => {
                        return data.getAllEventTypes()
                            .then(eventTypes => {
                                res.send(eventTypes);
                            });
                    });
            }

        },






    };
};