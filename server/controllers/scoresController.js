const { Score } = require('../../db/orm.js');

module.exports = {
  addScore: async (grade, quizId, studentId) => {
    try {
      await Score.create({grade: grade, quizId: quizId, studentId: studentId});
    } catch (err) {
      throw err;
    }
  },
  getScore: async () => {
    try {
      let scores = await Score.findAll();
      return scores;
    } catch (err) {
      throw err;
    }
  }
};