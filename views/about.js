angular.module('portfolio.about', ['ngRoute'])
.controller('aboutCtrl', function($scope, $http){
    $http.get("/data.json")
        .then(function(res){
            $scope.skills = res.data.skills;
    });
});