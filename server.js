const mysql = require('mysql2');
const express = require('express');

// adding PORT destination and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*
<------------TEST-------->
//Test Express.js connection
app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    });
});
<------------------------->
*/

// Connect to Database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your mySQL username,
        user: 'root',
        // Your mySQL pwd
        password: 'mySQLBallz00oo!23!23',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

/*
// Return all the data in the candidates table
// Runs a DB Query and executes callback with resulting rows that match the query
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})
*/


// // GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// //Route to handle user requests that are not supported by the app
// app.use((req, res) => {
//     res.status(404).end();
// });

// // Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// // Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//             VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db. query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });


// function to start Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});