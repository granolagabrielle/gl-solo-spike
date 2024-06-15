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

// get pattern details for specific user -- pass in id of pattern that was clicked on
router.get('/:id', (req, res) => {
  const queryText = `
    SELECT * FROM "patterns_inventory" WHERE id=$1;
    `;
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error in GET /api/patterns/:id', err);
      res.sendStatus(500);
    });
});

// post new pattern to inventory -- TO DO: ADD AUTHENTICATION
router.post('/', (req, res) => {
  console.log('in pattern post, check req.body', req.body);
  const queryText = `INSERT INTO "patterns_inventory" 
    ("pattern_id", "title", "designer_name", "pattern_type", "difficulty_level", "yarn_weight_needed", "user_id", "pattern_image") 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
  pool
    .query(queryText, [
      req.body.pattern_id,
      req.body.title,
      req.body.designer_name,
      req.body.pattern_type,
      req.body.difficulty_level,
      req.body.yarn_weight_needed,
      req.user.id,
      req.body.pattern_image,
    ])
    .then(() => res.sendStatus(201))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// delete pattern from inventory

module.exports = router;
