var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.post('/juggling-balls-answer', function (req, res) {
  // make a variable and give it a value from 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']

  // whether the variable matched a condition
  if (jugglingBalls == "3 or more") {
    // send user to next pages
    res.redirect ('/juggling-trick')
  } else {
    // send user to ineligible pages
    res.redirect('/ineligible')
  }
})

module.exports = router
