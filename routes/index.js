let express     = require('express'),
    router      = express.Router(),
    passport    = require('passport'),
    middleware  = require('../middleware/index'),
    User        = require('../models/user');


// ROOT

router.get('/', (req, res) => {
    res.render('index');
});

// AUTHENTICATION

// register account
router.get('/signup', (req, res) => {
    res.render('signup');
});

// sign up logic
router.post('/signup', (req, res) => {
    let newUser = new User({email: req.body.email, username: req.body.username });
    console.log(newUser);
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            req.flash('error', err.message);
            console.log(err);
            return res.redirect('signup');
        }
        passport.authenticate('local')(req, res, () => {
            req.flash('success', 'Welcome to Cluster, ' + user.username);
            res.redirect('/profile');
        });
    });
});

// login page
router.get('/login', (req, res) => {
    res.render('login');
});

// login logic
router.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login'
    }), (req, res) => {
        console.log(req.user);
});

// logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Logged out successfully!');
    res.redirect('/');
});

// PROFILE

router.get('/profile', middleware.isLoggedIn, (req, res) => {
    res.render('profile', {
        user: req.user
    });
});

module.exports = router;