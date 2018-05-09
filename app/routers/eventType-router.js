'use strict';

module.exports = function (app, express, data) {
    let eventTypeRouter = new express.Router(),
        eventTypeController = require('../controllers/eventType-controller')(data);


    eventTypeRouter


















    app.use('/events/type', eventTypeRouter);
};
