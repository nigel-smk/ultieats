angular.module('app', ['uiGmapgoogle-maps'])
    .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDmY2IlkIcBb92ol1jJZzhyPzFDPTtqBBw',
            v: '3.22',
            libraries: 'weather,geometry,visualization'
        });
    });