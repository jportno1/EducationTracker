const { Teacher } = require('../../db/orm.js');

module.exports = {
  addTeacher: async (name, schoolId) => {
    try {
      await Teacher.create({name: name, schoolId: schoolId});
    } catch (err) {
      throw err;
    }
  },
  getTeachers: async () => {
    try {
      let teachers = await Teacher.findAll();
      return teachers;
    } catch (err) {
      throw err;
    }
  },
  deleteTeacher: async (name) => {
    try {
      await Teacher.destroy({
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