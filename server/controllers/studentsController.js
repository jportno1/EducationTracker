const { Student } = require('../../db/orm.js');

module.exports = {
  addStudent: async (name, schoolId) => {
    try {
      await Student.create({name: name, schoolId: schoolId});
    } catch (err) {
      throw err;
    }
  },
  getStudents: async () => {
    try {
      let students = await Student.findAll();
      return students;
    } catch (err) {
      throw err;
    }
  }
};