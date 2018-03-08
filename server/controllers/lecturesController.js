const { Lecture } = require('../../db/orm.js');

module.exports = {
  addLecture: async (name, classId) => {
    try {
      await Lecture.create({name: name, classId: classId});
    } catch (err) {
      throw err;
    }
  },
  getLectures: async () => {
    try {
      let lectures = await Lecture.findAll();
      return lectures;
    } catch (err) {
      throw err;
    }
  }
};