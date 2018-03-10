const router = require('express').Router();
const schoolsRouter = require('./routers/schoolsRouter.js');
const teachersRouter = require('./routers/teachersRouter.js');
const studentsRouter = require('./routers/studentsRouter.js');
const classesRouter = require('./routers/classesRouter.js');
const lecturesRouter = require('./routers/lecturesRouter.js');
const topicsRouter = require('./routers/topicsRouter.js');
const quizzesRouter = require('./routers/quizzesRouter.js');
const scoresRouter = require('./routers/scoresRouter.js');
const studentClassesRouter = require('./routers/studentClassesRouter.js');
const usersRouter = require('./routers/usersRouter.js');
const {Student, Lecture, Topic, Quiz} = require('../db/orm.js');

router.use('/schools', schoolsRouter);
router.use('/teachers', teachersRouter);
router.use('/students', studentsRouter);
router.use('/classes', classesRouter);
router.use('/lectures', lecturesRouter);
router.use('/topics', topicsRouter);
router.use('/quizzes', quizzesRouter);
router.use('/scores', scoresRouter);
router.use('/studentClasses', studentClassesRouter);
router.use('/auth', usersRouter);

router.get('/allLectures', async (req, res) => {
  try {
    let lectures = await Lecture.findAll();
    res.status(200).send(lectures);
  } catch (err) {
    res.sendStatus(500);
  }
})

router.get('/allStudents', async (req, res) => {
  try {
    let students = await Student.findAll();
    res.status(200).send(students);
  } catch (err) {
    res.sendStatus(500);
  }
});

router.get('/allTopics', async (req, res) => {
  try {
    let topics = await Topic.findAll();
    res.status(200).send(topics);
  } catch (err) {
    res.sendStatus(500);
  }
})

router.get('/allQuizzes', async (req, res) => {
  try {
    let quizzes = await Quiz.findAll();
    res.status(200).send(quizzes);
  } catch (err) {
    res.sendStatus(500);
  }
})


module.exports = router;