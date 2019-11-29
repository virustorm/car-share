const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');
const info = require('./information/password');
var path = require('path');
var passport = require('passport');
const app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');
app.use(express.json());

mongoose.connect(`mongodb://localhost:27017/carShareDB`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}),
	() => {
		console.log('Connected!');
	};

require('./config/passport')(passport); // pass passport for configuration

app.use(cors());
app.use(cookieParser()); // read cookies (needed for auth)

app.get('/', function(req, res) {
	res.json('hi');
});

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use('/cars', require('./routes/zipCar'));
app.use('/bikes', require('./routes/mobiBike'));
app.use('/register', require('./routes/user'));

app.listen(5000, function() {
	console.log('boop');
});
