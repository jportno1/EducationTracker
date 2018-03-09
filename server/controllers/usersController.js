const { User } = require('../../db/orm.js');
const bcrypt = require('bcrypt');

module.exports = {
  signup: async ({username, password}) => {
    try {
      let hashedPass = await bcrypt.hash(password, Math.floor(Math.random() * 10));
      await User.create({username: username, password: hashedPass});
      let user = await User.findOne({ where: { username: username } });
      return user;
    } catch (err) {
      throw err;
    }
  },
  login: async ({username, password}) => {
    try {
      let user = await User.findOne({ where: { username: username } });
      let isValid = await User.prototype.validPassword(user.password, password);
      if (!(user && isValid)) {
        throw null;
      }
      return user;
    } catch (err) {
      throw err;
    }
  }
};
