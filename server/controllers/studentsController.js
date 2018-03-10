const { Student, Class, StudentClass } = require('../../db/orm.js');

module.exports = {
  addStudent: async (name, schoolId) => {
    try {
      await Student.create({name: name, schoolId: schoolId});
    } catch (err) {
      throw err;
    }
  },
  getStudents: async (className) => {
    try {
      let classId = await Class.findOne({ where: {name: className}});
      let studentsIds = await StudentClass.findAll( {where: {classId: classId.dataValues.id}})
      return studentsIds;
    } catch (err) {
      throw err;
    }
  },
  getStudentId: async (name) => {
    try {
      let studentsIds = await Student.findOne( {where: {name: name}})
      return studentsIds.id;
    } catch (err) {
      throw err;
    }
  },
  deleteStudent: async (name) => {
    try {
      await Student.destroy({
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