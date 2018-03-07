const router = require('express').Router();
const schoolsRouter = require('./routers/schoolsRouter.js');
const teachersRouter = require('./routers/teachersRouter.js');


router.use('/schools', schoolsRouter);
router.use('/teachers', teachersRouter);

//router.get()
//router.post()
//router.put()
//router.delete()

module.exports = router;