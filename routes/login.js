const mongoose=require('mongoose');
const keys=require('../config/keys')
const User=mongoose.model('user');
var MongoClient = require('mongodb').MongoClient;
module.exports=(app)=>{
  app.get('/api/login',(req, res) =>{
    MongoClient.connect(keys.mongooseURI, function(err, db) {
      if (err) throw err;
      var dbo = db.db("login_register");
    const p= dbo.collection("users").find({}).toArray(function(err, result){
        if (err) throw err;
        var data=result.map((result)=>{return result})
        db.close();
        res.send(data);
      })
    });
  });
app.get('/api/logout', (req, res)=>{
  res.json(req.body)
})
}