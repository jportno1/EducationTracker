const router = require('express').Router();
const topicsController = require('../controllers/topicsController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await topicsController.addTopic(req.body.name, req.body.lectureId);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      let topics = await topicsController.getTopics(req.query.name);
      res.status(200).send(topics)
    } catch (err) {
      res.sendStatus(500);
    }
  })

  .delete(async (req, res) => {
    try {
      await topicsController.deleteTopic(req.query.name);
      res.sendStatus(202);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .put((req, res) => {

  });

module.exports = router;