const mongoose=require('mongoose');
const passport=require('passport');
var LocalStrategy = require('passport-local').Strategy;
const User=mongoose.model('user');
passport.serializeUser((User, done)=>{
	done(null, User.email);
  });
  passport.deserializeUser((email, done)=>{
	User.findById(email)
	.then(User=>{
	  done(null, User);
	});
  });
  
	passport.use(new LocalStrategy(
		function(username, password, done) {
			User.findOne({ username: email }, function(err, User) {
				if (err) { return done(err); }
				if (!User) {
					return done(null, false, { message: 'Incorrect username.' });
				}
				if (!User.validPassword(password)) {
					return done(null, false, { message: 'Incorrect password.' });
				}
				return done(null, user);
			});
		}
	));
