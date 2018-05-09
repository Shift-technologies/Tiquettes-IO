'use strict';

const nodemailer = require('nodemailer');
const supportEmail = 'niyio53@gmail.com';


const helpers = require('../helpers'),
    formidable = require('formidable'),
    path = require('path'),
    uploader = require('../helpers/uploader');

const settings = {
    host: 'smtp.sendgrid.net',
    service: 'Gmail',
    port: parseInt(587, 10),
    requiresAuth: true,
    auth: {
        user: 'niyio53@gmail.com',
        pass: 'recasan098'
    }
};
const transporter = nodemailer.createTransport(settings);

module.exports = function (data) {
    return {


        getAllUsers(req, res) {
            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            } else {

                return Promise.resolve()
                    .then(() => {
                        return data.getAllUsers()
                            .then(users => {
                                res.send(users);
                            });
                    });
            }

        },
        getUserById(req, res) {
            if (!req.isAuthenticated()) {
                res.sendStatus(401);
            } else {
                return Promise.resolve()
                    .then(() => {
                        return data.getUserById(req.user.id)
                            .then(user => {
                                res.send(user);
                            });
                    });
            }
        },

        updateUser(req, res) {
            const updatedUser = req.body;

            return Promise.resolve()
                .then(() => {
                    if (!req.isAuthenticated()) {
                        res.sendStatus(401);
                    } else {
                        return data.findUserByIdAndUpdate(req.user._id, updatedUser);
                    }
                })
                .then(user => {
                    res.sendStatus(200)
                        .send(user);
                })
                .catch(err => {
                    res.status(400)
                        .send(JSON.stringify({
                            validationErrors: helpers.errorHelper(err)
                        }));
                });
        },
        getAllUserEvents(req, res) {
            return Promise.resolve()
                .then(() => {
                    if (!req.isAuthenticated()) {
                        res.sendStatus(401);
                    } else {
                        return data.getUserByName(req.user.username)
                            .then(user => {
                                res.send(user.subscribedEvents);
                            });
                    }
                });
        },



        uploadProfileAvatar(req, res) {
            return new Promise((resolve, reject) => {
                if (!req.isAuthenticated()) {
                    res.sendStatus(401);
                    reject();
                } else {
                    let form = new formidable.IncomingForm();
                    form.maxFieldsSize = 2 * 1024 * 1024;

                    form.onPart = function (part) {
                        if (!part.filename || part.filename.match(/\.(jpg|jpeg|png)$/i)) {
                            form.on('end', function (fields, files) {
                                if (this.openedFiles[0].size > form.maxFieldsSize) {
                                    return reject({
                                        name: 'ValidationError',
                                        message: 'Maximum file size is 2MB.'
                                    });
                                } else {
                                    res.sendStatus(200);
                                }

                                let userFolder = req.user.id,
                                    pathToUploadFolder = path.join(__dirname, '../../public/uploads/users', userFolder),
                                    newFileName = 'avatar';

                                uploader.uploadFile(this.openedFiles[0], pathToUploadFolder, newFileName)
                                    .then(uploadedFileName => {
                                        resolve(uploadedFileName);
                                    });
                            });
                            form.handlePart(part);
                        } else {
                            return reject({
                                name: 'ValidationError',
                                message: 'File types allowed: jpg, jpeg, png.'
                            });
                        }
                    };

                    form.on('error', function (err) {
                        reject(err);
                    });

                    form.parse(req);
                }
            })
                .then((fileName) => {
                    if (typeof fileName !== 'string') {
                        return;
                    }

                    let avatarUrl = '/static/uploads/users/' + req.user.id + '/' + fileName;
                    data.findUserByIdAndUpdate(req.user.id, {
                        avatarUrl
                    });
                })
                .catch((err) => {
                    res.status(400)
                        .send(JSON.stringify({
                            validationErrors: [err.message]
                        }));
                });
        },














    };
};