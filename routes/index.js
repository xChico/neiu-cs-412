const express = require('express')
const router = express.Router()


router.get('/', async function(req, res, next) {
  let options = {
    'name': 'The Gallery',
    'title': 'The Gallery',
    'tname': 'The Gallery',
    styles: ['/assets/stylesheets/second.css', '/assets/stylesheets/style.css']

  }

  res.render('index.hbs', options);
});
module.exports = router;


