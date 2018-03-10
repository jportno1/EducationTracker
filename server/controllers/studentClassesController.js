const { StudentClass, Student, Class } = require('../../db/orm.js');

module.exports = {
  addStudentClass: async (studentId, classId) => {
    try {
      await StudentClass.create({studentId: studentId, classId: classId});
    } catch (err) {
      throw err;
    }
  },
  getStudentClasses: async (studentName) => {
    try {
      let { id } = await Student.findOne({name: studentName});
      let studentClasses = await StudentClass.findAll({where: {studentId: id}});
      let classArr = [];
      await studentClasses.forEach((obj) => {classArr.push(obj.classId)});
      let classNames = await Class.findAll({where: {id: classArr}})
      return classNames;
    } catch (err) {
      throw err;
    }
  },
  deleteStudentClass: async (studentId, classId) => {
    try {
      await StudentClass.destroy({
        where: {
          studentId: studentId,
          classId: classId
        }
      })
    } catch (err) {
      throw err;
    }
  }
};