'use strict';
const passport = require('passport'),
    helpers = require('../helpers');

module.exports = function (data) {
    return {

        loginLocal(req, res, next) {
            const auth = passport.authenticate('local', function (error, user) {
                if (error) {
                    next(error);
                    return;
                }

                if (!user) {
                    res.sendStatus(400);
                    res.json({
                        success: false,
                        message: 'Invalid name or password!'
                    });
                }

                req.login(user, error => {
                    if (error) {
                        next(error);
                        return;
                    }

                    res.sendStatus(200);
                });
            });

            return Promise.resolve()
                .then(() => {
                    if (!req.isAuthenticated()) {
                        auth(req, res, next);
                    } else {
                        res.sendStatus(200);
                    }
                });
        },

        register(req, res) {
            const user = req.body;

            return Promise.resolve()
                .then(() => {
                    return data.createUser(user);
                    res.send(user);
                })
                .then(dbUser => {
                    passport.authenticate('local')(req, res, function () {
                        res.sendStatus(200);
                    });
                })
                .catch(error => {
                    res.sendStatus(400)
                        .send(JSON.stringify({
                            validationErrors: helpers.errorHelper(error)
                        }));
                });
        },


        loginFacebook() {
            const auth = passport.authenticate('facebook', {
                scope: ['email', 'user_location']
            });

            return auth;
        },
        loginFacebookCallback() {
            const auth = passport.authenticate('facebook', {
                successRedirect: '/profile',
                failureRedirect: '/'
            });

            return auth;
        },
        loginGooglePlus() {
            const auth = passport.authenticate('google', {
                scope: ['profile', 'email']
            });

            return auth;
        },
        loginGooglePlusCallback() {
            const auth = passport.authenticate('google', {
                successRedirect: '/profile',
                failureRedirect: '/'
            });

            return auth;
        },
        loginTwitter() {
            const auth = passport.authenticate('twitter');

            return auth;
        },
        loginTwitterCallback() {
            const auth = passport.authenticate('twitter', {
                successRedirect: '/profile',
                failureRedirect: '/'
            });

            return auth;
        },
        logout(req, res) {
            return Promise.resolve()
                .then(() => {
                    if (!req.isAuthenticated()) {
                        res.sendStatus(401);
                    } else {
                        req.logout();
                        res.sendStatus(200);
                    }
                });
        },




    };
};