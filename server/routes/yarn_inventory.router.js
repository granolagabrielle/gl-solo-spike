const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get uploads -- TO DO: ADD AUTHENTICATION
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "yarn_inventory" WHERE id=$1;`;
  pool
    .query(queryText)
    .then((result) => res.send(result.rows))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// post uploads -- TO DO: ADD AUTHENTICATION
router.post('/', (req, res) => {
  const { description, file_url, file_type } = req.body;
  const queryText = `INSERT INTO "yarn_inventory" (description, file_url, file_type) VALUES ($1, $2, $3) WHERE id=$1;`;
  pool
    .query(queryText, [description, file_url, file_type])
    .then(() => res.sendStatus(201))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// delete uploads -- TO DO: ADD AUTHENTICATION
router.delete('/:id', (req, res) => {
  const queryText = `DELETE FROM "uploads" WHERE id=$1;`;
  pool
    .query(queryText, [req.params.id])
    .then(() => res.sendStatus(204))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
