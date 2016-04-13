var express = require('express');
var router = express.Router();
var yelpApi = require('yelp');

var yelp = new yelpApi({
    consumer_key: '23W1IHykgMhbZw7S7_RFKA',
    consumer_secret: '-qpi5yIzVvPvF9rUw8MwSCmIy6s',
    token: '0WTEVqE6W4J5uKHyYHRghM8-JHm6f7uA',
    token_secret: '94HhsgAcyNFUQas6RG1OtuzHxmo'
});

router.get('/search', function (req, res) {
    //take params through query parameters
    yelp.search({
            term: req.query.term,
            ll: req.query.ll
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
            res.sendStatus(500);
        });
});

module.exports = router;