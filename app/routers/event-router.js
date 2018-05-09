'use strict';

module.exports = function (app, express, data) {
    let eventRouter = new express.Router(),
        eventController = require('../controllers/event-controller')(data);

    eventRouter
        .post('/register', eventController.createEvent)
        .put('/:id', eventController.updateEvent)











    app.use('/events', eventRouter);
};
