const mongoose=require('mongoose');
const User=mongoose.model('user');
module.exports=(app)=>{
    app.post('/api/personaldata', (req, res)=>{
        const user=new User({local:req.body});
        user.save();
        res.send({redirect:'/login'});
    })}