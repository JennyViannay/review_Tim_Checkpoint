const express = require('express');
const router = express.Router();
const connection = require('../../config/config');

router.get('/', (req, res) => {
    connection.query(`SELECT * FROM gallery  `, (err, results) => {
  
      if (err) {
        console.log(err);
        res.status(500).send(`Erreur lors de la récupération des photos de gallery`);
      } else {
        res.json(results);
      }
    });
  });

  module.exports = router;