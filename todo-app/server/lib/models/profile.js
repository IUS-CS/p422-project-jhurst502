const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

ProfileSchema.query.byUserName = function (userName) {
  return this.where({userName: userName})
}
const profile = mongoose.model('profiles', ProfileSchema);
module.exports = profile;
