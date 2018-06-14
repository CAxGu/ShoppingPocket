var router = require('express').Router();
var email = require('../../utils/email');

router.post('/sendmail', function(req, res){
    email.sendMail(req,res);
});

module.exports = router;