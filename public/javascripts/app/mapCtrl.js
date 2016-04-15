angular.module('app').controller("MapCtrl", function($scope, uiGmapGoogleMapApi, RestaurantsDataSvc) {
    //define relevant variables
    //@43.6690522,-79.395342,17z
    $scope.homeMarker = {
        coords: { latitude: 43.669211, longitude: -79.393164 },
        options: {
            icon: "http://static.wixstatic.com/media/c7ec87_091b4494cc4b49418a847caaba6a4e1b.png_srz_35_35_85_22_0.50_1.20_0.00_png_srz"
        }
    }
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