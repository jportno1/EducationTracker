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
  .get((req, res) => {

  })
  .delete((req, res) => {

  })
  .put((req, res) => {

  });

module.exports = router;