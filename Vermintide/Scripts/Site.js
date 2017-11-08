

var app = angular.module("Vermin", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "main.htm"
        })
        .when("/HornOfMagnus", {
            templateUrl: "pages/Act 1/HornOfMagnus.htm"
        })
        .when("/SmugglersRun", {
            templateUrl: "pages/Act 1/SmugglersRun.htm"
        })
        .when("/SupplyAndDemand", {
            templateUrl: "pages/Act 1/SupplyAndDemand.htm"
        })
        .when("/BlackPowder", {
            templateUrl: "pages/Act 1/BlackPowder.htm"
        })
        .when("/WizardsTower", {
            templateUrl: "pages/Act 1/WizardsTower.htm"
        });

    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
});