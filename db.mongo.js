'use strict';

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
//var ObjectId = require('mongodb').ObjectID;
var dbURL = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/url-shortener';

module.exports = {
    insertDocument: function (newObj) {
        MongoClient.connect(dbURL, function (err, db) {
            assert.equal(null, err);
            var sites = db.collection('sites');
            sites.insertOne(newObj, function (err, result) {
                assert.equal(err, null);
                console.log('Inserted a document into the sites collection. InsertedId: ' + result.insertedId + '.');
                db.close();
            });
        });
    },

    findDocument: function (field, url, callback) {
        MongoClient.connect(dbURL, function (err, db) {
            assert.equal(null, err);
            var sites = db.collection('sites');
            var query = {};
            query[field] = url;
            sites.findOne(query, function (err, result) {
                assert.equal(null, err);
                db.close();
                callback(result);
            });
        });
    },

    findDocumentOriginal: function (url, callback) {
        this.findDocument('original_url', url, callback);
    },

    findDocumentShort: function (url, callback) {
        this.findDocument('short_url', url, callback);
    }
};