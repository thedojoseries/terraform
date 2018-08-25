const express = require('express');
const app = express();
const request = require('request');
const config = require('./config/config.json');
const fs = require('fs');

app.get('/', function(req, response) {
    request(config.api2_url, { json: true }, (err, res, body) => {
        if (err) {
            response.send('API 1 is running fine. But I was not able to reach API 2 due to ' + err);
        } else {
            response.send('API 1 is running fine and managed to reach out to API 2. Well done!');
        }
    });
});

app.get('/config', function(req, res) {
    res.json(config);
});

app.get('/health', function(req, res) {
    res.send('Ok');
});

app.get('/config-log', function(req, res) {
    fs.readFile('/var/log/cloud-init-output.log', 'utf8', function (err,data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
      });
});

app.listen(3000, function() {
    console.log('API 1 is running...');
});