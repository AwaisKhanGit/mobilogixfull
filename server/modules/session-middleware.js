const cookieSession = require('cookie-session');

module.exports = cookieSession({
  secret: process.env.SERVER_SESSION_SECRET,
  key: 'user',
  resave: 'false',
  saveUninitialized: false,
  maxAge: 1000 * 60 * 60 * 24 * 7,
  secure: false,
});
