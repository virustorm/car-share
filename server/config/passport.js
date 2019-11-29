const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = function(passport) {
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});
	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});
	passport.use(
		'local-signup',
		new LocalStrategy(
			{
				// by default, local strategy uses username and password, we will override with email
				usernameField: 'username',
				passwordField: 'password',
				passReqToCallback: true // allows us to pass back the entire request to the callback
			},
			function(req, username, password, done) {
				process.nextTick(function() {
					User.findOne({ 'local.username': username }, function(err, user) {
						// if there are any errors, return the error
						if (err) return done(err);
						if (user) {
							return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
						} else {
							var newUser = new User();
							newUser.local.username = username;
							newUser.local.password = newUser.generateHash(password);
							newUser.save(function(err) {
								if (err) throw err;
								return done(null, newUser);
							});
						}
					});
				});
			}
		)
	);
};
