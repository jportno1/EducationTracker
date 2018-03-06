const Sequelize = require('sequelize');


const sequelize = new Sequelize('edtech', 'root', '', {
  host: 'localhost',
  port: 6001,
  dialect: 'mysql',
  pool: {
    max: 4,
    min: 0,
    acquire: 30000,
    idle: 10000,
    handleDisconnects: true,
    define: {
      timestamps: true
    }
  }
});

sequelize.authenticate().then(function() {
  console.log('You are connected to edtech Database on localhost');
}).catch(function(err) {
  console.log('Something went wrong, unable to connect to database: ', err);
});

//schemas

const School = sequelize.define('school', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: sequelize.STRING
},
{
  underscored: true
});

const Person = sequelize.define('person', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: sequelize.STRING,
  role: sequelize.STRING
});

const Class = sequelize.define('class', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: sequelize.STRING
});

const Lecture = sequelize.define('lecture', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: sequelize.STRING
});

const Topic = sequelize.define('topic', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: sequelize.STRING
});

const Quiz = sequelize.define('quiz', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: sequelize.STRING
});

const Score = sequelize.define('score', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  grade: sequelize.INTEGER
});

const Message = sequelize.define('message', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: sequelize.STRING,
  time: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW
  }
});

Person.belongsTo(School);
School.hasMany(Person);
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
Score.belongsTo(Person);
Quiz.hasMany(Score);
Person.hasMany(Score);
Message.belongsTo(Person);
Person.hasMany(Message);

module.exports.School = School;
module.exports.Person = Person;
module.exports.Class = Class;
module.exports.Lecture = Lecture;
module.exports.Topic = Topic;
module.exports.Quiz = Quiz;
module.exports.Score = Score;
module.exports.Message = Message;