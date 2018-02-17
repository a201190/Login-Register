const url=require('inspector');
const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const  cookieSession=require('cookie-session');
const keys =require('./config/keys');
const passport=require('passport');
const  cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const app=express();
const router=express.Router();
const path=require('path');
require('./model/user');
require('./services/facebookPassport');
require('./services/googlePassport');
mongoose.connect(keys.mongooseURI);
mongoose.connect('mongodb://localhost/loginapp');
var db=mongoose.connection;
app.use(bodyParser.json());
app.use(
    cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(cookieParser());
require('./routes/authRoutes')(app);
require('./routes/personalDetail')(app);
require('./routes/login')(app);
const PORT=process.env.PORT || 5000;
app.listen(PORT);