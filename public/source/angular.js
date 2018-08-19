var app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngMap']);

app.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        .when('/services', {
            templateUrl: 'pages/services.html',
            controller: 'mainController'
        })

        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'mainController'
        })

        .otherwise({
            redirectTo: '/'
        });

});

app.config(function($mdThemingProvider) {
    $mdThemingProvider.definePalette('ddPrimaryPalette', {
        '50': '#ffebee',
        '100': '#ffcdd2',
        '200': '#ef9a9a',
        '300': '#e57373',
        '400': '#ef5350',
        '500': '#006bc3', //this is primary
        '600': '#e53935',
        '700': '#d32f2f',
        '800': '#c62828',
        '900': '#b71c1c',
        'A100': '#ff8a80',
        'A200': '#ff5252',
        'A400': '#ff1744',
        'A700': '#d50000',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light
    });

    $mdThemingProvider.theme('default')
        .primaryPalette('ddPrimaryPalette');

    $mdThemingProvider.definePalette('ddAccentPalette', {
        '50': '#ffebee',
        '100': '#ffcdd2',
        '200': '#ef9a9a',
        '300': '#e57373',
        '400': '#ef5350',
        '500': '#bd0000',
        '600': '#e53935',
        '700': '#d32f2f',
        '800': '#c62828',
        '900': '#b71c1c',
        'A100': '#ff8a80',
        'A200': '#bd0000', // this is accent
        'A400': '#ff1744',
        'A700': '#d50000',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light
    });

    $mdThemingProvider.theme('default')
        .accentPalette('ddAccentPalette');

});
