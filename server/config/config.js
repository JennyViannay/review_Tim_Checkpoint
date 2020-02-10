const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    port: 8889, // ONLY IF YOU USE MAMP
    user: 'root',
    password: 'root',
    database: 'wildcircus'
})

module.exports = connection;