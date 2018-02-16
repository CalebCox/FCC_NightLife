const   express             = require('express'),
        mongoose            = require('mongoose'),
        bodyParser          = require('body-parser'),
        flash               = require('connect-flash'),
        morgan              = require('morgan'),
        cookieParser        = require('cookie-parser'),
        methodOverride      = require('method-override'),
        passport            = require('passport'),
        LocalStrategy       = require('passport-local'),
        TwitterStrategy     = require('passport-twitter').Strategy,
        FacebookStrategy    = require('passport-facebook').Strategy,
        GoogleStrategy      = require('passport-google-oauth').Strategy,
        User                = require('./models/user'),
        app                 = express();

// require routes
const indexRoutes           = require('./routes/index');

require('dotenv').config();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/cluster', {useMongoClient: true});
app.set('view engine', 'ejs');
app.use(methodOverride("_method"));
app.use(express.static(__dirname + '/public'));

app.use(require('express-session')({
    secret: 'thecowcrowsatmidnight',  
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', indexRoutes);

app.listen(3000, () => {
    console.log('Cluster is listening...');
});