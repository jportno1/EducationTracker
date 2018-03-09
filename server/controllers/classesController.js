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
  },
  deleteClass: async (name) => {
    try {
      await Class.destroy({
        where: {
          name: name
        }
      })
      alert(name, ' was deleted')
    } catch (err) {
      throw err;
    }
  }
};