angular.module("portfolio.projects", ["ngRoute"])
.controller('projectsCtrl', function($scope, $http){
    $http.get('/json/projects.json')
    .then(function(response){
        $scope.projects = response.data;
    });
    $scope.projectClick = function(id, $event){
        $event.preventDefault();
        var id = "#modal-"+id;
        $(id).modal();
    };
});