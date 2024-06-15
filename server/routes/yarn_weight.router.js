const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get designer names for dropdown list
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "yarn_weight";`;
  pool
    .query(queryText)
    .then((result) => res.send(result.rows))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
