const { Class } = require('../../db/orm.js');

module.exports = {
  addClass: async (name, schoolId, teacherId) => {
    try {
      await Class.create({name: name, schoolId: schoolId, teacherId: teacherId});
    } catch (err) {
      throw err;
    }
  },
  getClasses: async () => {
    try {
      let classes = await Class.findAll();
      return classes;
    } catch (err) {
      throw err;
    }
  }
};