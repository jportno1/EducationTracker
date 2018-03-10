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
  .get(async (req, res) => {
    try {
      let quizzes = await quizzesController.getQuizzes();
      res.status(200).send(quizzes)
    } catch (err) {
      res.sendStatus(500);
    }
  })

  .delete(async (req, res) => {
    try {
      await quizzesController.deleteQuiz(req.query.name);
      res.sendStatus(202);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .put((req, res) => {

  });

module.exports = router;