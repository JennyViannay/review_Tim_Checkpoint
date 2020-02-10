const express = require('express');
const router = express.Router();
const connection = require('../../config/config');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port : '465',
    auth: {
        user: 'tonadresse@gmail.com',
        pass: 'tonmotdepassegmail'
    }
});

router.post('/', (req, res) => {
    const newContact = {
        email: req.body.email,
        message: req.body.message
    }
    connection.query(`INSERT INTO contact SET ?`, newContact, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send(`Erreur lors de l'envoie de votre message, réessayez plus tard'`);
        } else {
            const mailOptions = {
                from: newContact.email,
                to: 'ladresse_ou_tu_veux_recevoir_les_mails@gmail.com',
                subject: 'New message from WildCircus website // sending Email using Node.js',
                text: newContact.message
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            res.json('Votre message a bien été envoyé');
        }
    });
});


module.exports = router;