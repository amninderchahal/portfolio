angular.module("portfolio.project", ["ngRoute"])
.controller("projectCtrl", ["$scope", "$http","$routeParams", "$rootScope", function($scope, $http, $routeParams, $rootScope){
    var id = $routeParams.id - 1;
    $http.get('/json/work.json')
    .then(function(response){
        $scope.project = response.data.projects[id];
    });
    $scope.pageClass = "page-project";

    $scope.topBtnClick = function($event){
        $event.preventDefault();
        BindJSEvents.topBtnClickHandler();
    };
    $scope.$on('LastRepeaterElement', function(){
        BindJSEvents.init();
    });
}])
.directive('emitLastRepeaterElement', function() {
    return function(scope){
        if (scope.$last)
            scope.$emit('LastRepeaterElement');
    };
});

var BindJSEvents = (function($){
    var $window = $(window),
        $img;

    var scrollEventHandler = function(){
        var target = 200,
            scrollTop = $window.scrollTop();
        if (scrollTop > target){
            $img.css("width", "100%");
        }
        else{
            $img.css("width", "60%");
        }
    }
    var init = function(){
        $(function(){
            $img = $('.image-wrapper>img');
            var windowWidth = $window.width();
            if(windowWidth < 992) {
                return;
            }

            $window.scroll(function(){
                scrollEventHandler();
            });
        });
    }
    var topBtnClickHandler = function(){
        $('html, body').animate({
            scrollTop: $(".main").offset().top
        }, 1000);
    }
    return {
        init : init,
        topBtnClickHandler : topBtnClickHandler
    }
})(jQuery);