angular.module('app').factory('RestaurantsDataSvc', function ($q, YelpSvc) {
    var demoList = [
        'xtreme-taste-toronto-2',
        'whole-foods-market-toronto',
        'sandwich-box-toronto-5',
        'hemingways-restaurant-toronto',
        'manchu-wok-toronto-5',
        'sushi-inn-toronto',
        'salad-days-toronto',
        'the-oxley-toronto',
        'big-smoke-burger-toronto-3',
        'slab-burgers-toronto',
        'museum-tavern-toronto',
        'esthers-soup-kitchen-toronto'
    ];

    function getDummyData() {
        var restaurants = {}
        var deferred = $q.defer();
        var httpPromise = YelpSvc.businesses();

        httpPromise.then(function (res) {
            restaurants.list = res.data;
            populateMarkers(restaurants);
            deferred.resolve(restaurants);
        }, function (err) {
            console.error(err);
        });

        return deferred.promise;
    }

    function getData() {
        var restaurants = {};
        restaurants.list = [];
        var deferred = $q.defer();
        for (var i = 0; i < demoList.length; i++){
            YelpSvc.business(demoList[i])
                .then(function(res){
                    restaurants.list.push(res.data);
                    if (restaurants.list.length == demoList.length){
                        populateMarkers(restaurants);
                        deferred.resolve(restaurants);
                    }
                }, function(err){
                    console.error(err);
                });
        }
        return deferred.promise;
    }

    function getSearchData(term) {
        var restaurants = {};
        var deferred = $q.defer();
        YelpSvc.termSearch(term, 43.6690522,-79.395342)
        .then(function(res){
            restaurants.list = res.data.businesses;
            populateMarkers(restaurants);
            deferred.resolve(restaurants);
        }, function(err){
            console.error(err);
        });
        return deferred.promise;
    }

    function populateMarkers(restaurants) {
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

    return {
        getDummyData: getDummyData,
        getData: getData,
        getSearchData: getSearchData,
        demoList: demoList
    }
});