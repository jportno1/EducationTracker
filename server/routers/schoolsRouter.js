const router = require('express').Router();
const schoolsController = require('../controllers/schoolsController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await schoolsController.addSchool(req.body.name);
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