const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.status(200).send('API 2 is up and running!');
});

app.get('/health', function(req, res) {
    res.send('Ok');
});

app.listen(5000, function() {
    console.log('API 2 is running...');
});
