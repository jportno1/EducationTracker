
const db = require('./orm.js');
const { School, Teacher, Student, Class, Lecture, Topic, Quiz, Score, Message, StudentClass, User } = require('./orm.js');


db.sequelize.sync({force: true})
  .then(() => {
    console.log('connected');
  })
  .catch(() => {
    console.log('error, could not connect to db');
  });

