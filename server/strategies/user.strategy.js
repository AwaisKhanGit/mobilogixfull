const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const encryptLib = require('../modules/encryption');
const User = require('../models/user.model');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then((result) => {
      const user = result
      if (user) {
        delete user.password;
        done(null, user);
      } else {
        done(null, null);
      }
    })
    .catch((error) => {
      console.log('Error with query during deserializing user ', error);
      done(error, null);
    });
});


passport.use(
  'local',
  new LocalStrategy((username, password, done) => {
      User.findOne({ 'username': username })
      .then((result) => {
        const user = result
        if (user && encryptLib.comparePassword(password, user.password)) {
          done(null, user);
        } else {
          done(null, null);
        }
      })
      .catch((error) => {
        console.log('Error with query for user ', error);
        done(error, null);
      });
  })
);

module.exports = passport;
