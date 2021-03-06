const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');


const sequelize = new Sequelize('edtech', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});



//schema

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

const StudentClass = sequelize.define('studentClass', {});

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}//, {
  // hooks: {
  //   beforeCreate: (user) => {
  //     const salt = bcrypt.hashSync(user.password, salt);
  //   }
  // }
//}
);



User.prototype.validPassword = (hashedPassword, password) => {
  return bcrypt.compare(password, hashedPassword);
}



Teacher.belongsTo(School);
Student.belongsTo(School);
Class.belongsTo(School);
Class.belongsTo(Teacher);
Lecture.belongsTo(Class);
Topic.belongsTo(Lecture);
Quiz.belongsTo(Topic);
Score.belongsTo(Quiz);
Score.belongsTo(Student);
StudentClass.belongsTo(Class);
StudentClass.belongsTo(Student);



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
module.exports.StudentClass = StudentClass;
module.exports.User = User;
// module.exports.Message = Message;
module.exports.sequelize = sequelize;