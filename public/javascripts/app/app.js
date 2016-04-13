angular.module('app', ['uiGmapgoogle-maps'])
    .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDo8jLwn6euFHHmwKJe_EBlVBUBlDSWfZw',
            v: '3.22',
            libraries: 'weather,geometry,visualization'
        });
    });