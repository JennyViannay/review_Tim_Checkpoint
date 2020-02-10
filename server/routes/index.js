const express = require('express');
const router = express.Router();
const article = require('./article/Article');
const categorie = require('./categorie/Categorie');
const gallery = require('./gallery/Gallery');
const contact = require('./contact/contact');


router.use('/article', article )
router.use('/categorie', categorie)
router.use('/gallery', gallery)
router.use('/contact', contact)

router.get('/test', (req, res) => {
    res.send('Test route')
});


module.exports = router;