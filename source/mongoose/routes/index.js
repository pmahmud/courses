var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.server.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getnote', function(req, res, next) {
    return standupCtrl.getNote(req, res, next);
});

router.post('/newtnote', function(req, res) {
    return standupCtrl.create(req, res);
});

module.exports = router;
