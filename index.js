const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/dev');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

// const User = mongoose.model('users');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));

require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  res.send('hello there!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
