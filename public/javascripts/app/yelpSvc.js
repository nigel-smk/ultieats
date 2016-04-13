angular.module('app').factory('YelpSvc', function ($http) {
    function termSearch(term, latitude, longitude) {
        return $http({
            method: 'GET',
            url: '/api/yelp/search?term=' + term + '&ll=' + latitude + ',' + longitude,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    function business(id) {
        return $http({
            method: 'GET',
            url: '/api/yelp/business?id=' + id,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return {
        business: business,
        termSearch: termSearch
    }

});