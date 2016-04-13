angular.module('app').controller('RestaurantCtrl', function ($scope, YelpSvc) {

    var demoList = ['xtreme-taste-toronto-2', 'whole-foods-market-toronto', 'sandwich-box-toronto-5']

    $scope.restaurants = [];

    for (var i = 0; i < demoList.length; i++){
        YelpSvc.business(demoList[i])
        .then(function(res){
            $scope.restaurants.append(res.data);
        }, function(res){
            console.error(res.data);
        });
    }
});