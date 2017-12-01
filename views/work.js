angular.module("portfolio.work", ["ngRoute"])
.controller('workCtrl', function($scope, $http){
    $http.get('/json/work.json')
    .then(function(response){
        $scope.projects = response.data.projects;
    });
    $scope.projectClick = function(id, $event){
        $event.preventDefault();
        $scope.modal = $scope.projects[id];
        $("#modal").modal();
    };
});