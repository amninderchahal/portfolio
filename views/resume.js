angular.module("portfolio.resume", ["ngRoute"])
.controller("resumeCtrl", function($scope, $http){
    $http.get("/json/resume.json")
    .then(function(response){
        $scope.resume = response.data;
    })
});