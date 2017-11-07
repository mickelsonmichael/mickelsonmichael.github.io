

var app = angular.module("Vermin", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "main.htm"
        })
        .when("/horn", {
            templateUrl : "horn.htm"
        });

    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
});