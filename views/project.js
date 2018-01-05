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
        $('html, body').animate({
            scrollTop: $(".main").offset().top
        }, 1000);
    };
    $scope.$on('LastRepeaterElement', function(){
        animateOnScroll.initialize();
    });
}])
.directive('emitLastRepeaterElement', function() {
    return function(scope){
        if (scope.$last)
            scope.$emit('LastRepeaterElement');
    };
});

var animateOnScroll = (function($){
    var addZoomEffect = function(){
        $(function(){
            var $window = $(window),
                scrollTop,
                $img = $('.image-wrapper>img'),
                target = 200;

            if($window.width() < 992) return;
                
            $window.scroll(function(){
                scrollTop = $window.scrollTop();
                
                if (scrollTop > target){
                    $img.css("width", "100%");
                }
                else{
                    $img.css("width", "60%");
                }
            });
        });
    }
    return {
        initialize : addZoomEffect
    }
})(jQuery);