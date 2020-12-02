const Profile = require('../models/profile');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  byName: function (req, res) {
    const userName = req.params.userName;
    Profile.findOne().byUserName(userName).exec((err, profile) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      res.status(200);
      res.json(profile);
    });
  },
  addProfile: function (req, res) {
    let newProfileInfo = req.body;
    newProfileInfo.userName = newProfileInfo.userName.trimEnd();
    // Hash Password
    bcrypt.hash(newProfileInfo.password, saltRounds, function (err, hash) {
      newProfileInfo.password = hash;
    let newProfile = new Profile(newProfileInfo);
    newProfile.save()
      .then(() => {
        res.status(201);
        res.json('profile saved!');
      })
      .catch((err) => {
        res.status(400);
        return res.json(err);
      });
    });
  },
  signIn: function (req, res) {
    let signInData = req.body;
    Profile.findOne().byUserName(signInData.userName).exec((err, profile) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      console.log(profile.password);
      bcrypt.compare(signInData.password, profile.password, function(err, result) {
        if (result == true) {
          res.status(200);
          res.json(profile);
        } else {
          res.status(404);
          res.json('Username or Password incorrect');
        }
      });
    });
  }
}
