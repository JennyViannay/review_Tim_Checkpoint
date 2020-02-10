const express = require('express');
const router = express.Router();
const connection = require('../../config/config');

// écoute de l'url "/article/categorie"

router.get('/prout', (req, res) => {
    connection.query(`SELECT * FROM categorie`, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send(`Erreur lors de la récupération des categories`);
        } else {
            res.json(results)
        }
    })
});

router.get('/categorie/:id', (req, res) => {
    connection.query(`SELECT * FROM article WHERE id_categorie = ${req.params.id}`, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send(`Erreur lors de la récupération de l'article par l'id_categorie`);
        } else {
            res.json(results)
        }
    })
});

module.exports = router