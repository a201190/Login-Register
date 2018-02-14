const mongoose=require('mongoose');
const {Schema} = mongoose;
const userSchema=new Schema({
  local            : {
    email        : String,
    password     : String,
},
facebook         : {
    id           : String,
    token        : String,
    email        : String,
    name         : String
},
google           : {
    id           : String,
    token        : String,
    email        : String,
    name         : String
}
});
mongoose.model('user', userSchema);