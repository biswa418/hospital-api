const express = require('express');

const app = express();
const port = 8000;


//use express router to routes/
app.use('/', require('./routes'));


//start the server
app.listen(port, function (err) {
    if (err) { console.log(err); return; }

    console.log(`App is running on port - ${port}`);
});

