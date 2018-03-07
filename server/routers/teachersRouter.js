const router = require('express').Router();
const teachersController = require('../controllers/teachersController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await teachersController.addTeacher(req.body.name, req.body.schoolId);
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