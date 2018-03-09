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
      console.log('this is the id: ', id)
      let studentClasses = await StudentClass.findAll({where: {studentId: id}});
      console.log('studentclasses: ', studentClasses)
      let classArr = [];
      await studentClasses.forEach((obj) => {classArr.push(obj.classId)});
      console.log('this is classArr: ', classArr)
      let classNames = await Class.findAll({where: {id: classArr}})
      return classNames;
    } catch (err) {
      throw err;
    }
  }
};