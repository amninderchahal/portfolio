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
        controller : "aboutCtrl",
        title : "About"
    })
    .when("/work", {
        templateUrl : "views/work.html",
        controller : "workCtrl",
        title : "Personal Projects"
    })
    .when("/contact", {
        templateUrl : "views/contact.html",
        controller : "contactCtrl",
        title : "Contact"
    })
    .when("/about/resume", {
        templateUrl : "views/resume.html",
        controller : "resumeCtrl",
        title : "Resume"
    });
    $locationProvider.hashPrefix('');
})
.run(['$location', '$rootScope', function($location, $rootScope){
    $rootScope.$on("$routeChangeSuccess", function(event, current, previous){
        $rootScope.title = current.$$route.title;
    });
}])
.controller('appCtrl', ['$scope', '$location', function($scope, $location){
    $scope.isActive = function(route) {
        return route === $location.path();
    }
}]);
