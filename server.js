const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
});

app.get('/api/customers', (req, res) => {

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'dev',
        password: 'dev',
        database: 'management',
        port: 8889
    })
    
    connection.connect();

    connection.query('SELECT * FROM customer', function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    })
    


    connection.end();

});

app.listen(port, () => console.log(`Listening on port ${port}`));