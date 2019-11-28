const mongoose = require('mongoose');

const mobiSchema = new mongoose.Schema({
	lat: Number,
	lng: Number,
	location: String,
	bikeStalls: Number,
	bikeInStall: Number
});

module.exports = mongoose.model('mobiBike', mobiSchema);
