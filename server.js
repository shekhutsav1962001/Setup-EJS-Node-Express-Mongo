const express = require('express')
const app = express()
var cors = require('cors')
const path = require('path');
const helmet = require("helmet");
const PORT = process.env.PORT || 3000

// all routes
// var authRoutes = require('./routes/authRoute')



 
// some dependency

// old
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

//new
app.use(express.urlencoded({extended: true})); 
app.use(express.json());  

// cors 
app.use(cors({origin: '*'}))

// public files
app.use(express.static('public'));

//secure http
app.use(helmet());

//database connection
const db = require('./database/db')();



// EJS configuration
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// for testing purpose
app.get('/', (req, res) => {
    // res.send("Hello Utsav from EJS first Server")
    const arr = ['a','b','c','d']
    res.render('index',{data:"utsav",error:"this is my error", arr:arr})
})

// use all routes
// app.use('/', authRoutes)

// for debugging
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

