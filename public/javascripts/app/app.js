angular.module('app', ['uiGmapgoogle-maps'])
    .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            "key": "AIzaSyAhqn5I4NW1kkpujJCiF0JKWdYO-alymgQ",
            "v": "3.22",
            "libraries": "weather,geometry,visualization"
        });
    });