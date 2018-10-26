var express = require('express');
var router = express.Router();
var User = require('../db/User');

var passportFacebook = require('../auth/passport_fb');

/* GET home page. */


module.exports = function (passport) {
    router.post('/signup', function (req, res) {
        var body = req.body,
            username = body.username,
            password = body.password;
        User.findOne({
            username: username
        }, function (err, doc) {
            if (err) {
                res.status(500).send('error occured')
            } else {
                if (doc) {
                    res.status(500).send('Username already exists')
                } else {
                    var record = new User()
                    record.username = username;
                    record.password = record.hashPassword(password)
                    record.save(function (err, user) {
                        if (err) {
                            res.status(500).send('db error')
                        } else {
                            req.login(user, function(err){
                                if(err){
                                  console.error(err);
                                  return next(err);
                                }
                                return res.redirect('/profile');
                            });
                            //res.redirect('/login')
                        }
                    })
                }
            }
        })
    });


    router.post('/login', passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/profile',
    }), function (req, res) {
        res.send('hey')
    })


    router.get('/fblogin', passportFacebook.authenticate('facebook'));

    router.get('/fblogin/callback',
        passportFacebook.authenticate('facebook', { 
            failureRedirect: '/login',
            successRedirect: '/profile' 
        }),
        function(req, res) {
        // Successful authentication
        res.json(req.user);
    });


    return router;
};