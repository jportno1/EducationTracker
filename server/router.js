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

// router.get('/allStudents', (req, res) => {

// });



module.exports = router;