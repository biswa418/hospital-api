const express = require('express');
//initialize
const app = express();
const port = 8000;

//mongo
const db = require('./config/mongoose');

//auth
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');

//bodyparser
app.use(
    express.urlencoded({ extended: true })
);

//use express router to routes/
app.use('/', require('./routes'));


//start the server
app.listen(port, function (err) {
    if (err) { console.log(err); return; }

    console.log(`App is running on port - ${port}`);
});

