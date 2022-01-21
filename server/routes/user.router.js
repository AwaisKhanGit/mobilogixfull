const express = require('express');
const {
  rejectUnauthenticated
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/user.strategy');
const User = require("../models/user.model")
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  const myreponse = {
    _id : req.user._id,
    username : req.user.username,
    userRole : req.user.userRole
  }
  res.send(myreponse);
});

router.post('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

router.post('/login',userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

router.post('/register', (req, res) => {
  console.log(req.body)
  const { username } = req.body
  const password = encryptLib.encryptPassword(req.body.password);
    const user = new User({ username,password });
    user.save().then((event)=>{
      res.status(201).send(event)
      }).catch((e)=>{
      res.status(500).send(e)
      })
});


module.exports = router;