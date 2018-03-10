const router = require('express').Router();
const usersController = require('../controllers/usersController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      let user = await usersController.signup(req.body);
      req.session.user = user.dataValues;
      res.sendStatus(201);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      let user = await usersController.login(req.query);
      req.session.user = user.dataValues;
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(403);
    }
  })

module.exports = router;