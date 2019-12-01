const express = require('express');
const router = express.Router();
const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');

router.get('/', (req, res) => {
	user.find({}, (err, users) => {
		res.json(users);
	});
});

router.post('/', async (req, res) => {
	//checking is username exist
	const userExist = await user.findOne({ username: req.body.username });
	if (!userExist) return res.status(400).send('Username is invalid');
	//checking password
	const validPass = await bcrypt.compare(req.body.password, userExist.password);
	if (!validPass) return res.status(400).send('Password is invalid');

	const token = jwt.sign({ _id: userExist._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
	res.header('auth-token', token).send(token);
});

module.exports = router;
