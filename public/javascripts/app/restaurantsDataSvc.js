angular.module('app').factory('RestaurantsDataSvc', function ($q, YelpSvc) {
    var restaurants = {};

    return {
        getData: function () {
            var deferred = $q.defer();
            var httpPromise = YelpSvc.businesses();

            httpPromise.then(function (res) {
                    restaurants.list = res.data;
                    populateMarkers();
                    deferred.resolve(restaurants);
                }, function (err) {
                    console.error(err);
                });

            return deferred.promise;
        }
    }

    function populateMarkers() {
        var markers = [];
        for (var i = 0; i < restaurants.list.length; i++){
            var r = restaurants.list[i];
            markers.push({
                id: r.id,
                latitude: r.location.coordinate.latitude,
                longitude: r.location.coordinate.longitude,
                show: false,
                data: r
            });
        }
        restaurants.markers = markers;
    }
});