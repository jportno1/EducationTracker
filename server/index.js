const express = require('express')
const path = require('path')
const parser = require('body-parser')
const logger = require('morgan')
const router = require('./router.js')
const usersRouter = require('./routers/usersRouter.js');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const { User } = require('../db/orm.js')

const app = express()


app.use('/', express.static(path.join(__dirname, '../client')));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(logger('tiny'));
app.use(cookieParser());

app.use(session({
  key: 'user_sid',
  secret: 'secretcode',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 900000
  }
}))

app.use((req, res, next) => {
  if(req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
})

app.use('/auth', usersRouter);

const sessionChecker = (req, res, next) => {
  if(!(req.session.user && req.cookies.user_sid)) {
    res.redirect('/');
  } else {
    next();
  }
}

app.use('/api', /*sessionChecker,*/ router);

// app.route('/signup')
//     .get(sessionChecker, (req, res) => {
//         res.redirect('/login');
//     })
//     .post((req, res) => {
//         User.create({
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password
//         })
//         .then(user => {
//             req.session.user = user.dataValues;
//             res.redirect('/');
//         })
//         .catch(error => {
//             res.redirect('/login');
//         });
//     });

  // app.route('/login')
  //   .get(sessionChecker, (req, res) => {
  //       res.redirect('/login');
  //   })
  //   .post((req, res) => {
  //       var username = req.body.username,
  //           password = req.body.password;

  //       User.findOne({ where: { username: username } }).then(function (user) {
  //           if (!user) {
  //               res.redirect('/login');
  //           } else if (!user.validPassword(password)) {
  //               res.redirect('/login');
  //           } else {
  //               req.session.user = user.dataValues;
  //               res.redirect('/');
  //           }
  //       });
  //   });

  app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
  });






app.listen(9000, function() {
  console.log('EdTech App Listening on port 9000')
})