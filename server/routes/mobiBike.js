const express = require('express');
const router = express.Router();
const mobiBike = require('../models/mobiBike');

router.get('/', (req, res) => {
	mobiBike.find({}, (err, bikes) => {
		res.json(bikes);
	});
});
router.get('/:id', (req, res) => {
	mobiBike.find({}, (err, bikes) => {
		const found = bikes.some((bikes) => bikes._id == req.params.id);
		if (found) {
			res.json(bikes.filter((bikes) => bikes._id == req.params.id));
		}
	});
});

router.post('/', (req, res) => {
	const bike = new mobiBike({
		lat: req.body.lat,
		lng: req.body.lng,
		location: req.body.location,
		bikeInStall: req.body.bikeInStall,
		bikeNotInStall: req.body.bikeStalls
	});

	bike.save((err) => {
		if (err) {
			console.log(err);
		} else {
			console.log(bike);
			console.log('saved');
		}
	});
});

module.exports = router;
