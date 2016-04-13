angular.module('app').controller('RestaurantCtrl', function ($scope, YelpSvc, RestaurantsDataSvc) {

    RestaurantsDataSvc.getData()
        .then(function(data){
            $scope.restaurants = data;
        }, function(err){
            console.error(err);
        });

    // YelpSvc.businesses()
    // .then(function(res){
    //     $scope.restaurants = res.data;
    // }, function(err){
    //     console.error(err);
    // });
    //
    // var demoList = ['xtreme-taste-toronto-2', 'whole-foods-market-toronto', 'sandwich-box-toronto-5']

    // for (var i = 0; i < demoList.length; i++){
    //     YelpSvc.business(demoList[i])
    //     .then(function(res){
    //         $scope.restaurants.append(res.data);
    //     }, function(res){
    //         console.error(res.data);
    //     });
    // }
});