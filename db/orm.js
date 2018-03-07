const Sequelize = require('sequelize');


const sequelize = new Sequelize('edtech', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// var user = 'root';
// var password = '';
// var db = 'edtech';

// var connection = mysql.createConnection({

//   host: 'localhost',
//   user: user,
//   password: password,
//   database: db

// });

// connection.connect(function(err) {
//   if(err) {
//     return console.log('There was an error: ', err)
//   };
//   console.log('Now connected to ', db);
// });

//schemas

const School = sequelize.define('school', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING
},
{
  underscored: true
});

const Teacher = sequelize.define('teacher', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING
});

const Student = sequelize.define('student', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING
});

const Class = sequelize.define('class', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING
});

const Lecture = sequelize.define('lecture', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING
});

const Topic = sequelize.define('topic', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING
});

const Quiz = sequelize.define('quiz', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING
});

const Score = sequelize.define('score', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  grade: Sequelize.INTEGER
});

const Message = sequelize.define('message', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: Sequelize.STRING,
  time: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

Teacher.belongsTo(School);
School.hasMany(Teacher);
Student.belongsTo(School);
School.hasMany(Student);
Student.hasMany(Class);
Class.hasMany(Student);
Class.belongsTo(School);
Class.belongsTo(Teacher);
School.hasMany(Class);
Teacher.hasMany(Class);
Lecture.belongsTo(Class);
Class.hasMany(Lecture);
Topic.belongsTo(Lecture);
Lecture.hasMany(Topic);
Quiz.belongsTo(Topic);
Topic.hasMany(Quiz);
Score.belongsTo(Quiz);
Score.belongsTo(Student);
Student.hasMany(Score);
Quiz.hasMany(Score);
Message.belongsTo(Student);
Message.belongsTo(Teacher);
Student.hasMany(Message);
Teacher.hasMany(Message);

sequelize.authenticate().then(function() {
  console.log('You are connected to edtech Database on localhost');
}).catch(function(err) {
  console.log('Something went wrong, unable to connect to database: ', err);
});

module.exports.School = School;
module.exports.Teacher = Teacher;
module.exports.Student = Student;
module.exports.Class = Class;
module.exports.Lecture = Lecture;
module.exports.Topic = Topic;
module.exports.Quiz = Quiz;
module.exports.Score = Score;
module.exports.Message = Message;
module.exports.sequelize = sequelize;