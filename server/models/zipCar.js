const mongoose = require('mongoose');

const zipSchema = new mongoose.Schema({
	lat: Number,
	lng: Number,
	location: String,
	cars: String
});

module.exports = mongoose.model('zipCar', zipSchema);
