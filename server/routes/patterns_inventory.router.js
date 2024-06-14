const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get pattern inventory for specific user -- TO DO: ADD AUTHENTICATION
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "patterns_inventory" WHERE "user_id"=$1;`;
    pool
      .query(queryText, [req.user.id])
      .then((result) => res.send(result.rows))
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  });
  // WORKS IN POSTMAN

  module.exports = router;