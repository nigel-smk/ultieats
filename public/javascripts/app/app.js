angular.module('app', ['uiGmapgoogle-maps'])
    .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            "key": "5I4NW1kkpujJCiF0JKWdYO-alymgQ_AIzaSyAhqn",
            "v": "3.22",
            "libraries": "weather,geometry,visualization"
        });
    });