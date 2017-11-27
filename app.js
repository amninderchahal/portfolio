angular.module("portfolio", ["ngRoute",
                             "portfolio.work",
                             "portfolio.about"])
.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when("/" , {
        templateUrl : "views/about.html",
        controller : "aboutCtrl"
    })
    .when("/work", {
        templateUrl : "views/work.html",
        controller : "workCtrl"
    })
    .when("/contact", {
        templateUrl : "views/contact.html"
    });
    $locationProvider.hashPrefix('');
});
