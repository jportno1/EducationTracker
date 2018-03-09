const { Score, Student } = require('../../db/orm.js');

module.exports = {
  addScore: async (grade, quizId, studentId) => {
    try {
      await Score.create({grade: grade, quizId: quizId, studentId: studentId});
    } catch (err) {
      throw err;
    }
  },
  getStudentScores: async (studentName) => {
    try {
      let { id } = await Student.findOne({name: studentName});
      let scores = await Score.findAll({where: {studentId: id}});
      return scores;
    } catch (err) {
      throw err;
    }
  }
};