'use strict';
let connectionStrings = {
    production: process.env.MONGOLAB_URI,
    development: 'mongodb://localhost/events-db'
};

// TODO: SET SESSION_SECRET AND CONNECTION_STRING CONSTANTS
module.exports = {
    environment: process.env.NODE_ENV || 'development',
    connectionString: connectionStrings[process.env.NODE_ENV || 'development'],
    port: process.env.PORT || 3003,
    sessionSecret: process.env.SESSION_SECRET || '[session_secret]'
};

//mongodb://iamtelo:recasan098@ds119660.mlab.com:19660/heroku_7qhhv26s