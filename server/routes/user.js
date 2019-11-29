const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.get('/', (req, res) => {
	user.find({}, (err, users) => {
		res.json(users);
	});
});

router.post('/', (req, result) => {
	const users = new user({
		username: req.body.username,
		password: req.body.password
	});
	console.log(req.body.username);
	console.log(req.body.password);
	user.find({ username: `${req.body.username}` }, (err, res) => {
		if (res.length > 0) {
			result.status(400).send('Username Taken');
		} else {
			users.save((err) => {
				if (err) {
					console.log(err);
				} else {
					result.status(200).send('success');
				}
			});
		}
	});
});

module.exports = router;
