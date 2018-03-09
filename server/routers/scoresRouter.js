const router = require('express').Router();
const scoresController = require('../controllers/scoresController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await scoresController.addScore(req.body.grade, req.body.quizId, req.body.studentId);
      res.sendStatus(201);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      let studentScores = await scoresController.getStudentScores(req.query.name);
      res.status(200).send(studentScores);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .delete((req, res) => {

  })
  .put((req, res) => {

  });

module.exports = router;