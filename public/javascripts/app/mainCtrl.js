angular.module('app').controller('MainCtrl', function($scope, RestaurantsDataSvc){
    $scope.restaurants = {}
    $scope.newPlaceMode = false;
    $scope.newPlaceName = {}

    RestaurantsDataSvc.getData()
        .then(function(data){
            $scope.restaurants = data;
        }, function(err){
            console.error(err);
        });

    $scope.newPlace = function(term) {
        if (!term) {
            $scope.newPlaceMode = !$scope.newPlaceMode;
        }
        RestaurantsDataSvc.getSearchData(term)
            .then(function(data){
                $scope.restaurants = data;
            }, function(err){
                console.error(err);
            });
    }

    $scope.newPlaceDone = function() {
        $scope.newPlaceMode = !$scope.newPlaceMode;
        RestaurantsDataSvc.getData()
            .then(function(data){
                $scope.restaurants = data;
            }, function(err){
                console.error(err);
            });
    }
});