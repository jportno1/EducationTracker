const router = require('express').Router();
const schoolsController = require('../controllers/schoolsController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await schoolsController.addSchool(req.body.name);
      res.sendStatus(201);
    } catch (err) {
      res.sendStatus(500);
    }
  })

  .get(async (req, res) => {
    try {
      let schools = await schoolsController.getSchools();
      res.status(200).send(schools)
    } catch (err) {
      res.sendStatus(500);
    }
  })

  .delete(async (req, res) => {
    try {
      console.log('req.query.name ', req.query.name)
      await schoolsController.deleteSchool(req.query.name);
      res.sendStatus(202);
    } catch (err) {
      res.sendStatus(500);
    }
  })

module.exports = router;