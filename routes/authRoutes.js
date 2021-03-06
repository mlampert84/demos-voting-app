const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
  app.post('/api/create_user', async (req, res) => {
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

  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    res.status(200).send();
  });

  // app.get('/login/success', (req, res) => {
  //   res.redirect('/');
  // });

  // app.get('/login/failure', (req, res) => {
  //   res.status(401).send({});
  // });
  // app.get('/api/polls', (req, res) => {
  //   res.send('Hello there!');
  // });

  app.get('/api/current_user', (req, res) => {
    // res.send('Here is your user');
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
