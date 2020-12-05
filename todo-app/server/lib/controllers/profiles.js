const Profile = require('../models/profile');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  all: function (req, res) {
    Profile.find().exec((err, profiles) => {
      if (err) {
        res.status(404);
        res.json(err);
        return;
      }
      res.status(200);
      res.json(profiles);
    });
  },
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
    let signInUser = req.body.userName;
    let signInPassword = req.body.password;
    Profile.findOne().byUserName(signInUser).exec((err, profile) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      if (profile !== null) {
        bcrypt.compare(signInPassword, profile.password, function (err, result) {
          if (result == true) {
            res.status(200);
            res.json(profile);
          } else {
            res.status(404);
            res.json('Username or Password incorrect');
          }
        });
      } else {
        res.status(404);
        res.json('Username or Password incorrect');
      }
    });
  },
  delete: function (req, res) {
    const userName = req.params.userName;
    Profile.deleteOne().where(userName).exec()
      .then((profiles) => {
        res.status(200);
        res.json(profiles);
      })
      .catch((err) => {
        res.status(404);
        res.json('User not found');
      })
  }
}
