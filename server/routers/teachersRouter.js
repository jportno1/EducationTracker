const router = require('express').Router();
const teachersController = require('../controllers/teachersController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await teachersController.addTeacher(req.body.name, req.body.schoolId);
      res.sendStatus(201);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      let teachers = await teachersController.getTeachers()
      res.status(200).send(teachers);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      await teachersController.deleteTeacher(req.query.name);
      res.sendStatus(202);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .put((req, res) => {

  });

module.exports = router;