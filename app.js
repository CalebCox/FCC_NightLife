const   express             = require('express'),
        mongoose            = require('mongoose'),
        bodyParser          = require('body-parser'),
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
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/cluster', {useMongoClient: true});
app.set('view engine', 'ejs');
app.use(methodOverride("_method"));
app.use(express.static(__dirname + '/public'));


app.use('/', indexRoutes);

app.listen(3000, () => {
    console.log('Cluster is listening...');
});