const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
  app.post('/create_user', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user) res.send('Username is taken.');
    else {
      const newUser = new User();
      (newUser.username = req.body.username),
        (newUser.password = newUser.generateHash(req.body.password));
      newUser.save();
      res.send('New User Registered');
    }
  });

  app.post(
    '/login',
    passport.authenticate('local', { failureRedirect: '/login/failure' }),
    (req, res) => {
      res.redirect('/login/success');
    }
  );

  app.get('/login/success', (req, res) => {
    res.send('Logged in as user ' + req.user.id);
  });

  app.get('/login/failure', (req, res) => {
    res.send('You failed to log in');
  });

  app.get('/api/current_user', (req, res) => {
    // res.send('Here is your user');
    res.send({ user: req.user });
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
