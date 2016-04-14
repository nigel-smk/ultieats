angular.module('app').controller("MapCtrl", function($scope, uiGmapGoogleMapApi, RestaurantsDataSvc) {
    //define relevant variables
    //@43.6690522,-79.395342,17z
    $scope.map = { center: { latitude: 43.6690522, longitude: -79.395342 }, zoom: 18 };
    $scope.options = { scrollwheel: false };
    uiGmapGoogleMapApi.then(function(maps) {
       //use the maps object
    });

    $scope.markerClick = function(marker, eventName, model){
        model.show = !model.show;
    }
    
    //RestaurantsDataSvc.getData()
    //    .then(function(data){
    //        $scope.restaurants = data;
    //    }, function(err){
    //        console.error(err);
    //    });
    
});