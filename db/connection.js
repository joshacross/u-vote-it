const mysql = require('mysql2');

// Connect to Database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your mySQL username,
        user: 'root',
        // Your mySQL pwd
        password: '',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;