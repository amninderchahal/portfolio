angular.module("portfolio.directive.projectLink", [])
.directive("projectLink", function(){
    return {
        restrict : 'E',
        scope :{
            project : "=",
            index : "="
        },
        templateUrl : "views/directives/projectLink.html",
        replace : true
    }
});