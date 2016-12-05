const router = require('express').Router();
const mongoose = require('mongoose');

const statementsRouter = require('./statements/routes');

const settings = require('./config');

router.use('/statements', statementsRouter);

// Default
router.use('/:apiRequest', (req, res) => {
  res
  .status(501)
  .json({
    status: `${req.params.apiRequest} not implemented yet`
  });
});

module.exports = router;

// Init database
/**
 * @see http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

/**
 * @see http://mongoosejs.com/docs/connections.html
 */
mongoose.connect(settings.db.mongo.mongodbUri, (err) => {
  if (err) {
    console.log("mongoose error: ", err);
  } else {
    console.log(`
      mongoose connected to 
      ${settings.db.mongo.mongodbUri}
    `);
  }
});
