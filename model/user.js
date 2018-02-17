const mongoose=require('mongoose');
var bcrypt = require('bcryptjs');
const {Schema} = mongoose;
const userSchema=new Schema({
  local: {
      fName:String,
      lName:String,
      email: String,
      mobile:String,
      password:String,
},
facebook: {
    id:String,
},
google: {
    id:String,
    }
});
mongoose.model('user', userSchema);


// module.exports.createUser = function(newUser, callback){
// 	bcrypt.genSalt(10, function(err, salt) {
// 	    bcrypt.hash(newUser.password, salt, function(err, hash) {
// 	        newUser.password = hash;
// 	        newUser.save(callback);
// 	    });
// 	});
// }

// module.exports.getUserByUsername = function(email, callback){
// 	var query = {email: local.email};
// 	User.findOne(query, callback);
// }

// module.exports.comparePassword = function(candidatePassword, hash, callback){
// 	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
//     	if(err) throw err;
//     	callback(null, isMatch);
// 	});
// }