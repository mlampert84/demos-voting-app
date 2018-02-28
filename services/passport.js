const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  // console.log('Serializing user', user.id);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    // console.log('Deserialized user', user);
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(async (username, password, done) => {
    // console.log('Searching database for', username);
    try {
      const user = await User.findOne({ username });
      if (!user || !user.validPassword(password)) {
        return done(null, false);
      }

      return done(null, user);
    } catch (err) {
      done(err);
    }
  })
);
