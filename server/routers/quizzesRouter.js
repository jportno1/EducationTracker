const router = require('express').Router();
const quizzesController = require('../controllers/quizzesController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await quizzesController.addQuiz(req.body.name, req.body.topicId);
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