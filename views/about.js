angular.module('portfolio.about', ['ngRoute'])
.controller('aboutCtrl', function($scope, $http){
    $http.get("/json/skills.json")
        .then(function(res){
            $scope.skills = res.data;
    });
});