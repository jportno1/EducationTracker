// const mysql = require('mysql');

const db = require('./orm.js');
// const models = require('...models');
const { School, Teacher, Student, Class, Lecture, Topic, Quiz, Score, Message, StudentClass, User } = require('./orm.js');


db.sequelize.sync({force: true})
  .then(() => {
    console.log('connected');
  })
  .catch(() => {
    console.log('error, could not connect to db');
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