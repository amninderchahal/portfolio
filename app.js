angular.module("portfolio", ["ngRoute",
                             "portfolio.work",
                             "portfolio.about",
                             "portfolio.resume"])
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
    })
    .when("/resume", {
        templateUrl : "views/resume.html",
        controller : "resumeCtrl"
    });
    $locationProvider.hashPrefix('');
});
