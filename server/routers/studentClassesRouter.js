const router = require('express').Router();
const studentClassesController = require('../controllers/studentClassesController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await studentClassesController.addStudentClass(req.body.studentId, req.body.classId);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get((req, res) => {

  })
  .delete((req, res) => {

  })
  .put((req, res) => {

  });

module.exports = router;