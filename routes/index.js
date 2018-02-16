const express           = require('express'),
      router            = express.Router(),
      middleware        = require('../middleware');


require('dotenv').config()

// INDEX ROUTE
router.get('/', (req, res) => {
    res.render("index");
});

// Authentication testing...
router.get('/login', (req, res) => {
    res.render('login', {message: req.flash('loginMessage')});
});

// router.post('/login', (req, res) => {

// });

router.get ('/signup', (req, res) => {
    res.render('signup', {message: req.flash('signupMessage')});
});

// router.post('/signup', (req, res) => {

// });

router.get('/profile', middleware.isLoggedIn, (req, res) => {
    res.render('profile', {
        user: req.user
    });
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;