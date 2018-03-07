const { School } = require('../../db/orm.js');

module.exports = {
  addSchool: async (name) => {
    try {
      await School.create({name: name});
    } catch (err) {
      throw err;
    }
  },
  getSchools: async () => {
    try {
      let schools = await School.findAll();
      return schools;
    } catch (err) {
      throw err;
    }
  }
};