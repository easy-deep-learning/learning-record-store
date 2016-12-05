const router = require('express').Router();

const Statement = require('./model');

/**
 * Read statements (all)
 * TODO: add pagination
 *
 * @example
 *
 * GET /api/statements
 */
router.get('/', (req, res) => {

  Statement.find().exec()
           .then(data => { dbSuccessHandler(data, res) })
           .catch(err => getDbErrorHandler(res));
});


/**
 * Read statement
 *
 * @example
 *
 * GET /api/statements/1
 */
router.get('/:id', (req, res) => {

  let query = {
    _id: req.params.id
  };

  Statement.findOne(query).exec()
           .then(data => { dbSuccessHandler(data, res) })
           .catch(err => getDbErrorHandler(res));

});

/**
 * Create statement
 *
 * @example
 *
 * POST /api/statements
 */
router.post('/', (req, res) => {
  let item = new Statement(req.body);

  item.save()
      .then(data => { dbSuccessHandler(data, res) })
      .catch(err => getDbErrorHandler(res));
});

/**
 * Update statement
 *
 * @examples
 *
 * PATCH /api/statements/1
 */
router.patch('/:id', (req, res) => {
  let query = {_id: req.params.id};

  /**
   * @see http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate
   */
  Statement.findOneAndUpdate(query, req.body, {'new': true}).exec()
           .then(data => { dbSuccessHandler(data, res) })
           .catch(err => getDbErrorHandler(res));

});

/**
 * Delete statement
 *
 * @examples
 *
 * DELETE /api/statements/1
 */
router.delete('/:id', (req, res) => {
  Statement.findByIdAndRemove(req.params.id).exec()
           .then(data => { dbSuccessHandler(data, res) })
           .catch(err => getDbErrorHandler(res));
});

module.exports = router;

/**
 * @param {Object} res Express response
 * @returns {Function}
 */
function getDbErrorHandler(res) {
  return function(err) {
    res.status(500)
       .json(err);
  };
}

/**
 *
 * @param {Object} data
 * @param {Object} res Express response
 */
function dbSuccessHandler(data, res) {
  res.status(200)
     .json(data);
}
