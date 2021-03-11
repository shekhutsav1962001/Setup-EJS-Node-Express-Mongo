require('dotenv').config()
const mongoose = require('mongoose')
function connectDb() {

    mongoose.Promise = global.Promise
    mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    const con = mongoose.connection
    con.on('open', () => {
        console.log("database connected in mongo atlas (#cloud)");
    })
    con.on('error', err => {
        console.log("Error! while connecting database (INTERNET ERROR)");
    });
}

module.exports = connectDb