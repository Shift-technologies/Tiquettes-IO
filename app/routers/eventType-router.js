'use strict';

module.exports = function (app, express, data) {
    let eventTypeRouter = new express.Router(),
        eventTypeController = require('../controllers/eventType-controller')(data);


    eventTypeRouter
        .post('/register', eventTypeController.createEventType)
        .get('/', eventTypeController.getAllEventTypes)


















    app.use('/eventTypes', eventTypeRouter);
};