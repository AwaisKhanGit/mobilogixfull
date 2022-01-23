import passport from 'passport'
import localStrategy from 'passport-local'
import encryptLib from '../modules/encryption'
import User from '../models/user.model'


const LocalStrategy = localStrategy.Strategy;
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

exports.default = passport;
