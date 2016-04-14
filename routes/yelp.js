var express = require('express');
var router = express.Router();
var yelpApi = require('yelp');

var yelp = new yelpApi(require("../keys/yelpKey.json"));

router.get('/search', function (req, res) {
    //take params through query parameters
    yelp.search({
            term: req.query.term,
            ll: req.query.ll,
            radius_filter: '2000'
        })
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            console.error(err);
            res.sendStatus(500);
        });
});

router.get('/business', function (req, res) {
    //take params through query parameters
    yelp.business(req.query.id)
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            console.error(err);
            res.sendStatus(501);
        });
});

router.get('/dummy_businesses', function (req, res) {
    res.json(require('../dummy_data/selected_restaurants.json'))
});

module.exports = router;