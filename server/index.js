const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');
var path = require('path');
var passport = require('passport');
const app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');
const dotenv = require('dotenv');
app.use(express.json());

// mongoose.connect(
// 	`mongodb://localhost:27017/carShareDB`,
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true
// 	},
// 	() => {
// 		console.log('connected');
// 	}
// );

mongoose.connect(
	`mongodb+srv://virustorm:chengyu0718@aerocar-avw6q.mongodb.net/test?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	() => {
		console.log('connected');
	}
);

require('./config/passport')(passport); // pass passport for configuration
dotenv.config();

app.use(cors());
app.use(cookieParser()); // read cookies (needed for auth)

app.get('/', function(req, res) {
	res.json('hi');
});

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.use('/cars', require('./routes/zipCar'));
app.use('/bikes', require('./routes/mobiBike'));
app.use('/register', require('./routes/user'));
app.use('/login', require('./routes/login'));
app.use('/auth', require('./routes/authToken'));

app.listen(5000, function() {
	console.log('boop');
});
