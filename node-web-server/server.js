const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('hello express!');
    res.send({
        name: 'Tomo',
        likes: [
            "Game",
            "Tennis"
        ]
    })
});

app.get('/about', (req, res) => {
    res.send('about page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'unable to handle request'
    })
});

app.listen(2000, () => {
    console.log('server is up and running on port 2000');
});