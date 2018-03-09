const router = require('express').Router();
const studentClassesController = require('../controllers/studentClassesController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await studentClassesController.addStudentClass(req.body.studentId, req.body.classId);
      res.sendStatus(201);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      let studentClasses = await studentClassesController.getStudentClasses(req.query.name);
      res.status(200).send(studentClasses);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .delete((req, res) => {

  })
  .put((req, res) => {

  });

module.exports = router;