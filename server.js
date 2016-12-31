'use strict';

var express = require('express');
var app = express();

var port = process.env.PORT || 8080;
var appURL = process.env.APP_URL || 'http://localhost:8080/'

var Validator = require('validatorjs');
var mongo = require('./db.mongo.js');

require('dotenv').config({
    silent: true
});

var newObj = {};

const generateNo = function () {
    var randomNo = Math.floor(Math.random() * 90000);
    return randomNo.toString().substr(0, 4);
};

app.set('view options', {layout: false});
app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
   res.render('/views/index.html');
});

app.get('/new/:url*', function (req, res) {
    var url = req.url.slice(5);
    var validation = new Validator({ url: url }, { url: 'required|url' });

    if (validation.fails()) {
        return res.json({
            'error': '`' + url + '` is not a valid url.'
        });
    }

    mongo.findDocumentOriginal(url, function (result) {
        if (result) {
            console.log('Found an existing document with the same original url.');
            console.log(result);
            res.json({
                'error': url + ' already exists in the database.'
            });
        }
        else {
            newObj = {
                'original_url': url,
                'short_url': appURL + generateNo()
            };
            mongo.insertDocument(newObj);

            res.json(newObj);
        }
    });
});

app.get('/:id', function (req, res) {
    var url = appURL + req.params.id;

    mongo.findDocumentShort(url, function (result) {
        if (result) {
            console.log('Found an existing document with the same short url.');
            console.log(result);
            console.log('Redirecting to ' + result.original_url + '.');
            res.redirect(result.original_url);
        }
        else {
            res.json({
                'error': 'The url `' + url + '` does not exist in the database.'
            });
        }
    });
});

app.listen(port);