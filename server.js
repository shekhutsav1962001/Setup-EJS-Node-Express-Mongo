const express = require('express')
const app = express()
var cors = require('cors')
const path = require('path');
const helmet = require("helmet");
const PORT = process.env.PORT || 3000

// all routes
var demoRoutes = require('./routes/demoRoute')



 
// some dependency


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
    // if you are working on localhost then make it localhost:true 
    res.render('index',{data:"utsav",error:"this is my error", arr:arr,localhost:false})
})

// use all routes
app.use('/', demoRoutes)

// for debugging
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

