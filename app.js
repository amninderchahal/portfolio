angular.module("portfolio", ["ngRoute",
                             "ngAnimate",
                             "portfolio.work",
                             "portfolio.about",
                             "portfolio.resume",
                             "portfolio.contact"])
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
        templateUrl : "views/contact.html",
        controller : "contactCtrl"
    })
    .when("/resume", {
        templateUrl : "views/resume.html",
        controller : "resumeCtrl"
    });
    $locationProvider.hashPrefix('');
});
