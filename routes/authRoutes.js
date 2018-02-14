const passport = require('passport');
// const loginRequire=require('.././middleware/requireLogin');
module.exports = (app) => {
  app.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
  }));
  app.get('/auth/facebook/callback', passport.authenticate('facebook'), (req, res) => {
    res.redirect('/');
  });
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
    res.send(req.user);
  });
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
    console.log(res)
  });
};