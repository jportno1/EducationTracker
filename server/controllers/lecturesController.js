const { Lecture, Class } = require('../../db/orm.js');

module.exports = {
  addLecture: async (name, classId) => {
    try {
      await Lecture.create({name: name, classId: classId});
    } catch (err) {
      throw err;
    }
  },
  getLectures: async (className) => {
    try {
      let { id } = await Class.findOne({where: {name: className}});
      console.log('this is id in getLectures: ', id)
      let lectures = await Lecture.findAll({where: {classId: id}});
      console.log('this is lectures in getLectures: ', lectures);
     
      return lectures;
    } catch (err) {
      throw err;
    }
  }, 
  deleteLecture: async (name) => {
    try {
      await Lecture.destroy({
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