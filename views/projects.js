angular.module("portfolio.projects", ["ngRoute"])
.controller('projectsCtrl', function($scope, $http){
    $http.get('/data.json')
    .then(function(response){
        $scope.projects = response.data.projects;
    });
    $scope.projectClick = function(id, $event){
        $event.preventDefault();
        var id = "#modal-"+id;
        $(id).modal();
    };
    $scope.callback = function() {
        
    }
})
.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                scope.$evalAsync(attr.onFinishRender);
            }
        }
    }
});