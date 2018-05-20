'use strict';

module.exports = function (app, express, data) {
    let userRouter = new express.Router(),
        authController = require('../controllers/auth-controller')(data),
        userController = require('../controllers/user-controller')(data);


    userRouter
        .post('/register', authController.register)
        .post('/login', authController.loginLocal)
        .put('/:id', userController.updateUser)
        .put('/:id', userController.uploadProfileAvatar)
        .get('/', userController.getAllUsers)
        .get('/:id', userController.getUserById)
        .get('/:id/events', userController.getAllUserEvents)


















    app.use('/users', userRouter);
};