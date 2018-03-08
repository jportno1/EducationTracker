const router = require('express').Router();
const scoresController = require('../controllers/scoresController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await scoresController.addScore(req.body.grade, req.body.quizId, req.body.studentId);
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