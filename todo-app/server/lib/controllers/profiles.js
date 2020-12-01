const Profile = require('../models/profile');

module.exports = {
  byName: function (req, res) {
    const userName = req.params.userName;
    Profile.findOne().byUserName(userName).exec((err, profile) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      res.json(profile);
    });
  },
  addProfile: function (req, res) {
    let newProfileInfo = req.body;
    newProfileInfo.userName = newProfileInfo.userName.trimEnd();
    let newProfile = new Profile(newProfileInfo);
    newProfile.save()
      .then(() => {
        res.status(200);
        res.json('profile saved!');
      })
      .catch((err) => {
        res.status(400);
        return res.json(err);
      });
  }
}
