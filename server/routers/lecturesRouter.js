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
  .get(async (req, res) => {
    try {
      let lectures = await lecturesController.getLectures(req.query.name);
      res.status(200).send(lectures)
    } catch (err) {
      res.sendStatus(500);
    }
  })

  .delete(async (req, res) => {
    try {
      await lecturesController.deleteLecture(req.query.name);
      res.sendStatus(202);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .put((req, res) => {

  });

module.exports = router;