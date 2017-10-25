angular.module("portfolio", ["ngRoute",
                             "portfolio.projects",
                             "portfolio.about"])
.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when("/" , {
        templateUrl : "views/about.html",
        controller : "aboutCtrl"
    })
    .when("/projects", {
        templateUrl : "views/projects.html",
        controller : "projectsCtrl"
    })
    .when("/contact", {
        templateUrl : "views/contact.html"
    });
    $locationProvider.hashPrefix('');
});
