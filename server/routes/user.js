const express = require('express');
const router = express.Router();
const user = require('../models/user');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
	user.find({}, (err, users) => {
		res.json(users);
	});
});

router.post('/', async (req, result) => {
	const pass = req.body.password;
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(String(pass), salt);

	const users = new user({
		username: req.body.username,
		password: hashPassword
	});

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
