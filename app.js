const   express             = require('express'),
        mongoose            = require('mongoose'),
        bodyParser          = require('body-parser'),
        methodOverride      = require('method-override'),
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