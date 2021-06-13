const mongoose = require('mongoose');
require('dotenv').config();

module.exports = ()=>{
    const db = process.env.DB_URL;

    mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> console.log(`Connected to ${db}`))
        .catch(()=> console.log('Error connecting to mongodb'))
}