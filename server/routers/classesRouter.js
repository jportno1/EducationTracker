const router = require('express').Router();
const classesController = require('../controllers/classesController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await classesController.addClass(req.body.name, req.body.schoolId, req.body.teacherId);
      res.sendStatus(201);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      let classes = await classesController.getClasses();
      res.status(200).send(classes);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      await classesController.deleteClass(req.body.name);
      res.sendStatus(202);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .put((req, res) => {

  });

module.exports = router;