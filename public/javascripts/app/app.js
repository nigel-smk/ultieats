angular.module('app', ['uiGmapgoogle-maps'])
    .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyAfaIHSWkDyduGQlTxa-GGLm53owf9OyH0',
            v: '3.22',
            libraries: 'weather,geometry,visualization'
        });
    });