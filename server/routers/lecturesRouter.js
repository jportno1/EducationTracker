const router = require('express').Router();
const lecturesController = require('../controllers/lecturesController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await lecturesController.addLecture(req.body.name, req.body.classId);
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