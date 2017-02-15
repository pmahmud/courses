var express = require('express');
var passport = require('passport');
var router = express.Router();

router.route('/google/callback')
    .get(passport.authenticate('gooogle',{
        successRedirect: '/users/',
        failure: '/error/'
}));

router.route('/google')
    .get(passport.authenticate('gooogle',{
        scope: ['https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email']
}));

module.exports = router;
