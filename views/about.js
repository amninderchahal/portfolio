angular.module('portfolio.about', ['ngRoute'])
.controller('aboutCtrl', function($scope, $http){
    $http.get("/json/about.json")
        .then(function(res){
            $scope.intro = res.data.intro;
            $scope.summary = res.data.summary;
            $scope.skills = res.data.skills;
    });
});