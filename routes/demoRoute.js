var express = require('express')
var router = express.Router()

const demoController = require('../controller/demoController')




router.get('/demo', demoController.Myfunction )


module.exports = router