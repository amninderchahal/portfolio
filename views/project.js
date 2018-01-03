angular.module("portfolio.project", ["ngRoute"])
.controller("projectCtrl", ["$scope", "$http","$routeParams", "$rootScope", function($scope, $http, $routeParams, $rootScope){
    var id = $routeParams.id - 1;
    $http.get('/json/work.json')
    .then(function(response){
        $scope.project = response.data.projects[id];
    });
    $scope.pageClass = "page-project";
    $rootScope.projectId = $routeParams.id;

    $scope.topBtnClick = function($event){
        $event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".main").offset().top
        }, 1000);
    };
    $scope.$on('LastRepeaterElement', function(){
        setTimeout(zoomOnScroll.initialize, 200);
    });
}])
.directive('emitLastRepeaterElement', function() {
    return function(scope){
        if (scope.$last)
            scope.$emit('LastRepeaterElement');
    };
});

var zoomOnScroll = (function($){
    var getWidth = function(img){
        var parentWidth = img.parent().width(),
            width = img.width(),
            widthPercent = (width / parentWidth) * 100;
    
        return widthPercent;
    }
    var setWidth = function(img, width){
        var parentWidth = img.parent().width(),
            newWidth = (parentWidth * width) / 100;
        img.width(newWidth);
    }
    var addZoomEffect = function(){
        var lastScrollTop = $(window).scrollTop(),
            currentScrollTop,
            img = $('.image-wrapper>img'),
            width = getWidth(img);
            
        $(window).scroll(function(){
            currentScrollTop = $(window).scrollTop();
            if (lastScrollTop <= currentScrollTop){
                if (currentScrollTop > 120 && currentScrollTop < 600){
                    if(width < 100)
                        setWidth(img, width+1);
                }
            }
            else{
                if (currentScrollTop < 500 && currentScrollTop > 50){
                    if (width > 60)
                        setWidth(img, width-1);
                }
            }
            width = getWidth(img);
            lastScrollTop = currentScrollTop;
        });
    }
    return {
        initialize : addZoomEffect
    }
})(jQuery);