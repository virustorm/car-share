const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');
const info = require('./information/password');
var path = require('path');

const app = express();
app.use(express.json());

mongoose.connect(`mongodb://localhost:27017/carShareDB`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}),
	() => {
		console.log('Connected!');
	};

app.use(cors());

app.get('/', function(req, res) {
	res.json('hi');
});

app.use('/cars', require('./routes/zipCar'));
app.use('/bikes', require('./routes/mobiBike'));

app.listen(5000, function() {
	console.log('boop');
});
