const router = require('express').Router();
const studentsController = require('../controllers/studentsController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await studentsController.addStudent(req.body.name, req.body.schoolId);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      let students = await studentsController.getStudents()
      res.status(200).send(students);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      await studentsController.deleteStudent(req.body.name);
      alert(req.body.name, ' successfully deleted')
      res.sendStatus(202);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .put((req, res) => {

  });

module.exports = router;