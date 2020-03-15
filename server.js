const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
});

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': 'Jovan Markovic',
            'birthday': '1988-08-09',
            'gender': 'Male',
            'job': 'Senior Web Developer'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'Priyanka Hinal',
            'birthday': '1988-08-09',
            'gender': 'Female',
            'job': 'Team Manager'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': 'Rakesh Maxim',
            'birthday': '1988-08-09',
            'gender': 'Male',
            'job': 'Senior Web Developer'
        },
        {
            'id': 4,
            'image': 'https://placeimg.com/64/64/4',
            'name': 'Jacek Betal',
            'birthday': '1988-08-09',
            'gender': 'Male',
            'job': 'Designer'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));