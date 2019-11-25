const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.send('hi');
});
app.use(cors());
app.use(bodyParser.json());

app.listen(5000, function() {
	console.log('boop');
});

mongoose.connect('mongodb+srv://virustorm:virustorm0718@aerocar-avw6q.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
