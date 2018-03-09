const { Topic } = require('../../db/orm.js');

module.exports = {
  addTopic: async (name, lectureId) => {
    try {
      await Topic.create({name: name, lectureId: lectureId});
    } catch (err) {
      throw err;
    }
  },
  getTopics: async () => {
    try {
      let topics = await Topic.findAll();
      return topics;
    } catch (err) {
      throw err;
    }
  }, 
  deleteTopic: async (name) => {
    try {
      await Topic.destroy({
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