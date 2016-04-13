angular.module('app').factory('YelpSvc', function ($http) {
    function termSearch(term, latitude, longitude) {
        return $http({
            method: 'GET',
            url: '/api/yelp/search?term=' + term + '&ll=' + latitude + ',' + longitude,
            cache: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    function business(id) {
        return $http({
            method: 'GET',
            url: '/api/yelp/business?id=' + id,
            cache: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    function businesses() {
        return $http({
            method: 'GET',
            url: '/api/yelp/dummy_businesses',
            cache: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return {
        business: business,
        businesses: businesses,
        termSearch: termSearch
    }

});