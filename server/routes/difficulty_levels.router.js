const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get difficulty levels for dropdown list
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "difficulty_levels";`;
  pool
    .query(queryText)
    .then((result) => res.send(result.rows))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
