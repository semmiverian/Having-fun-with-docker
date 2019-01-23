var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'})
})

router.get('/tes', (req, res) => res.status(200).json({message: 'Trust me it Works Bro'}))

module.exports = router
