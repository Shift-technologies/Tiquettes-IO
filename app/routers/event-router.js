'use strict';

module.exports = function (app, express, data) {
    let eventRouter = new express.Router(),
        eventController = require('../controllers/event-controller')(data);

    eventRouter
        .post('/register', eventController.createEvent)
        .post('/search', eventController.search)
        .post('/:id/rate')
        .post('/subscribe', eventController.subscribeOrUnsubscribeForEvent)
        .post('/comment', eventController.commentEvent)
        .post('/avi', eventController.uploadImage)
        .put('/:id', eventController.updateEvent)
        .get('/specific', eventController.getSpecificEvents)
        .get('/:id', eventController.getEventDetails)
        .get('/', eventController.getAllEvents)
        .get('/categories', eventController.getEvents)
        .get('/pending', eventController.getAllEventsForApproval)












    app.use('/events', eventRouter);
};