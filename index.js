const express = require('express');
require('dotenv').config();
const app = express();


// DB setup
require('./startup/db')();
// routes setup
require('./startup/routes')(app);
// production
require('./startup/prod')(app);

const port = process.env.PORT;
const server = app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});