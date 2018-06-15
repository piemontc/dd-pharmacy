var app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngMessages']);

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

});