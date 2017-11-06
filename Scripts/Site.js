

var app = angular.module("Vermin", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "Pages/horn.htm"
    });
});