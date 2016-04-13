angular.module('app', ['uiGmapgoogle-maps'])
    .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: '',
            v: '3.22',
            libraries: 'weather,geometry,visualization'
        });
    });