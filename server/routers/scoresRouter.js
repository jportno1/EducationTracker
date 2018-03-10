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
  .delete(async (req, res) => {
    try {
      console.log('req.query in scores delete: ', req.query)
      await scoresController.deleteScore(req.query.studentId, req.query.quizId);
      alert('successfully deleted')
      res.sendStatus(202);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .put((req, res) => {

  });

module.exports = router;