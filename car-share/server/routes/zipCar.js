const express = require('express');
const router = express.Router();
const zipCar = require('../models/zipCar');

router.get('/', (req, res) => {
	zipCar.find({}, (err, cars) => {
		res.json(cars);
	});
});

router.post('/', (req, res) => {
	const car = new zipCar({
		lat: req.body.lat,
		lng: req.body.lng,
		location: req.body.location,
		cars: req.body.cars
	});
	car.save((err) => {
		if (err) {
			console.log(err);
		} else {
			console.log(car);
			console.log('saved');
		}
	});
});

module.exports = router;
