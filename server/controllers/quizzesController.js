const { Quiz } = require('../../db/orm.js');

module.exports = {
  addQuiz: async (name, topicId) => {
    try {
      await Quiz.create({name: name, topicId: topicId});
    } catch (err) {
      throw err;
    }
  },
  getQuizzes: async () => {
    try {
      let quizzes = await Quiz.findAll();
      return quizzes;
    } catch (err) {
      throw err;
    }
  }, 
  deleteQuiz: async (name) => {
    try {
      await Quiz.destroy({
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