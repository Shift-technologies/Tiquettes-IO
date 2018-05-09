'use strict';

const config = require('./config');
const app = require('./config/application')(config);
const data = require('./data')();

require('./config/database')(config.connectionString);
require('./auth')(app, data);
require('./routers')(app, data);

// let event = {
//     name: 'Blockchain', eventType: 'Hackathon', city: 'Lagos', country: 'Nigeria', address: 'Ikoyi', description: 'Make an app',
//     dateOfEvent: new Date('2018-5-5 10:00:00'), endDateOfEvent: new Date('2018-05-06 12:00:00'), capacity: 500, minAge: 10, rating: 5,
//     isDeleted: false, isApproved: true
// };

// data.getUserById('5844b33e8f78b1248ca833ae')
//     .then(user => { data.createEvent(event, user); });

// let user = {
//     firstName: 'admin',
//     lastName: 'adminski',
//     username: 'admin',
//     password: 'admin123456',
//     email: 'email@email.com',
//     age: 20,
//     role: 'admin'
// };
// data.createUser(user);

app.start();
