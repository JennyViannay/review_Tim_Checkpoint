const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./config/config');
const cors = require('cors')

const app = express();
const port = 8000;
const urlencodedParser = bodyParser.urlencoded({
    extended: true
});

app.use(cors())
app.use(bodyParser.json());
app.use(urlencodedParser);

app.use(require('./routes'));


//---------On définit la route Hello---------
app.get('/hello', (req, res) => {
    res.json("Hello World")
})

connection.connect((err) => {
    if (err) {
        return console.error('error:' + err.message);
    }
    console.log("Connected to the MySQL server.");
    });
    
app.listen(port, (err) => {
    if(err) {
        throw new Error('Something bad happened…')
    }
    console.log(`Server is listening on port ${port}`);
});


