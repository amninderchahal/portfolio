angular.module("portfolio.work", ["ngRoute"])
.controller('workCtrl', ["$scope", "$http", "$rootScope", function($scope, $http, $rootScope){
    $http.get('/json/work.json')
    .then(function(response){
        $scope.projects = response.data.projects;
    });
    $scope.pageClass = "page-work";
    $scope.projectClick = function(id, $event){
        $event.preventDefault();
        $rootScope.modal = $scope.projects[id];
        $("#modal").modal();
    };
}]);