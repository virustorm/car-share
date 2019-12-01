const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/', (req, res, next) => {
	const token = req.header('auth-token');
	if (!token) return res.status(401).send('Acess Denied');

	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.userExist = verified;
		next();
	} catch (err) {
		res.status(400).send('Invalid Token');
	}
});

module.exports = router;
