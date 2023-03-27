const mongoose = require('mongoose');
const env = require('./environment');

mongoose.set('strictQuery', false);

//connect to the database
mongoose.connect(`mongodb://127.0.0.1:27017/${env.db}`);
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to DB"));

db.once('open', function () {
    console.log('Connected to db');
});

module.exports = db;