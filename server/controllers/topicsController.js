const { Topic, Class } = require('../../db/orm.js');

module.exports = {
  addTopic: async (name, lectureId) => {
    try {
      await Topic.create({name: name, lectureId: lectureId});
    } catch (err) {
      throw err;
    }
  },
  getTopics: async (className) => {
    try {
      let { id } = await Class.findOne({where: {name: className}})
      let topics = await Topic.findAll({where: {classId: id}});
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