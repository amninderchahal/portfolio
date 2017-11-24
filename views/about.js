angular.module('portfolio.about', ['ngRoute'])
.controller('aboutCtrl', function($scope, $http){
    $http.get("/json/about.json")
        .then(function(res){
            $scope.intro = res.data.intro;
            $scope.skillSummary = res.data.skillSummary;
            $scope.mySkills = res.data.mySkills;
    });
});