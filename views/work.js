angular.module("portfolio.work", ["ngRoute"])
.controller('workCtrl', ["$scope", "$http", function($scope, $http){
    $scope.pageClass = "page-work";
    $http.get('/json/work.json')
    .then(function(response){
        $scope.projects = response.data.projects;
    });
}]);