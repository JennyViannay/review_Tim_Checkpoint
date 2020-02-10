const express = require('express');
const router = express.Router();
const connection = require('../../config/config');

//route des articles avec photocard url

router.get('/', (req, res) => {
  connection.query(`SELECT article_id, article_name, date, description, name_photocard, cat_name, categorie_id, url FROM article JOIN photocard as photoc ON photoc.id=id_photocard JOIN categorie as c ON c.categorie_id=id_categorie `, (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send(`Erreur lors de la récupération des articles avec photocard url`);
    } else {
      res.json(results);
    }
  });
});

//route pour afficher les categories

router.get('/categorie', (req, res) => {
    connection.query(`SELECT * FROM categorie`, (err, results) => {
  
      if (err) {
        console.log(err);
        res.status(500).send(`Erreur lors de la récupération des catégories`);
      } else {
        res.json(results);
      }
    });
});


//route des articles par catégorie

router.get('/:id', (req, res) => {
  connection.query(`SELECT article_id, article_name, date, description, name_photocard, cat_name, categorie_id, url FROM article JOIN photocard as photoc ON photoc.id=id_photocard JOIN categorie as c ON c.categorie_id=id_categorie WHERE article_id=${req.params.id}`, (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send(`Erreur lors de la récupération de l'article par l'id`);
    } else {
      res.json(results);
    }
  });
});

// SELECT article_name, date, description, c.cat_name, c.id  FROM article JOIN categorie as c ON c.id=id_categorie WHERE id_categorie=${req.params.id} ORDER BY date ASC








// router.get('/photobyarticle/:id', (req, res) => {

//   connection.query(`SELECT id_photo, name, url, art.article_name, art.date, art.description FROM photo JOIN article as art ON art.id_categorie=article_id WHERE art.id=${req.params.id}`, (err, results) => {
 
//     if (err) {
//       console.log(err);
//       res.status(500).send('Erreur lors de la récupération des articles');
//     } else {
//       res.json(results);
//     }
//   });
// });


// router.get('/photobyarticle/:id', (req, res) => {

//     connection.query(`SELECT id_photo, name, url, art.article_name, art.date, art.description FROM photo JOIN article as art ON art.id_categorie=article_id WHERE art.id=${req.params.id}`, (err, results) => {
   
//       if (err) {
//         console.log(err);
//         res.status(500).send('Erreur lors de la récupération des articles');
//       } else {
//         res.json(results);
//       }
//     });
// });

// router.get('/:id', (req, res) => {
//     connection.query(`SELECT * FROM article WHERE id = ${req.params.id}`, (err, results) => {
  
//       if (err) {
//         console.log(err);
//         res.status(500).send(`Erreur lors de la récupération de l'article par l'id`);
//       } else {
//         res.json(results);
//       }
//     });
// });


// router.get('/articlebycat/:id', (req, res) => {
//     connection.query(`SELECT article_name, date, description, c.cat_name, c.id  FROM article JOIN categorie as c ON c.id=id_categorie WHERE id_categorie=${req.params.id} ORDER BY date ASC`, (err, results) => {
  
//       if (err) {
//         console.log(err);
//         res.status(500).send(`Erreur lors de la récupération de l'article par l'id`);
//       } else {
//         res.json(results);
//       }
//     });
// });


module.exports = router;