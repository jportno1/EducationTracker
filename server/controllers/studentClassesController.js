const { StudentClass } = require('../../db/orm.js');

module.exports = {
  addStudentClass: async (studentId, classId) => {
    try {
      await StudentClass.create({studentId: studentId, classId: classId});
    } catch (err) {
      throw err;
    }
  },
  getStudentClasses: async () => {
    try {
      let studentClasses = await StudentClass.findAll();
      return studentClasses;
    } catch (err) {
      throw err;
    }
  }
};