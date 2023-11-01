const express = require('express');
const router = express.Router();
const query = require('../services/query-data');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await query.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting account information `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
    try {
      res.json(await query.create(req.body));
    } catch (err) {
      console.error(`Error while creating account information `, err.message);
      next(err);
    }
  });

module.exports = router;