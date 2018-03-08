const router = require('express').Router();
const classesController = require('../controllers/classesController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await classesController.addClass(req.body.name, req.body.schoolId, req.body.teacherId);
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