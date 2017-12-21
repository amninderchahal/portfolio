angular.module("portfolio.project", ["ngRoute"])
.controller("projectCtrl", ["$scope", "$http","$routeParams", "$rootScope", function($scope, $http, $routeParams, $rootScope){
    var id = $routeParams.id - 1;
    $http.get('/json/work.json')
    .then(function(response){
        $scope.project = response.data.projects[id];
    });
    $scope.pageClass = "page-project";
    $rootScope.projectId = $routeParams.id;

    $scope.topBtnClick = function($event){
        $event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".main").offset().top
        }, 600);
    };
}]);