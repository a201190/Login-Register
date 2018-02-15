const mongoose=require('mongoose');
const passport=require('passport');
const User=mongoose.model('user');
module.exports=(app)=>{
    app.post('/api/login',passport.authenticate('local'),((req, res)=>{
        // res.redirect('/login/' + req.user.username);
        console.log(req.body)
    }));
    app.get('/api/current_user', async (req, res)=>{
        res.send(req.User);
    })
  app.get('/api/logout', function(req, res){
      req.logout();
      res.redirect('/login');
  });
}