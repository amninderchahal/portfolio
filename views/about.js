angular.module('portfolio.about', ['ngRoute'])
.controller('aboutCtrl', ['$scope', '$http', '$interval', function($scope, $http, $interval){
    var timer, limit, isPlaying = true;
    $scope.pageClass = "page-about";
    $scope.startTimer = function(){
        if ( angular.isDefined(timer) ) return;
        timer = $interval(function(){
            renderSkills.refresh(limit);
        }, 4000);
    }
    $scope.clearTimer = function(){
        if (angular.isDefined(timer)) {
            $interval.cancel(timer);
            timer = undefined;
        }
    }
    $http.get("/json/about.json")
        .then(function(res){
            $scope.intro = res.data.intro;
            $scope.skillSummary = res.data.skillSummary;
            $scope.mySkills = res.data.mySkills;

            skills = [];
            $scope.mySkills.map(function(obj){
                obj.skills.map(function(skill){
                    skills.push(skill.title);
                })
            });
            renderSkills.init(skills);
            limit = skills.length;
            $scope.startTimer();
    });
    $scope.toggle = function($event){
        var btn = $event.currentTarget;
        var span = btn.childNodes[0];

        if(isPlaying){
            span.classList.add("glyphicon-play");
            span.classList.remove("glyphicon-pause");
            isPlaying = false;
            $scope.clearTimer();
        }
        else{
            span.classList.add("glyphicon-pause");
            span.classList.remove("glyphicon-play");
            isPlaying = true;
            renderSkills.refresh(limit);
            $scope.startTimer();
        }
    }
    $scope.$on('$destroy', function() {
        $scope.clearTimer();
        renderSkills.clearScrollTimer();
    });
}]);
Number.prototype.between = function(a, b) {
    var min = Math.min(a, b),
      max = Math.max(a, b);
  
    return this > min && this < max;
};
var renderSkills = (function($){
    var scrollTimer,
        colors = ['#B8860B', '#03A678','#3477DB', '#F64747', '#9B59B6'];
    var getRandom = function(range, check){
        var rnd = Math.random(),
            number = Math.floor(rnd * range);

        if(check){
            while(number < 4){
                rnd = Math.random();
                number = Math.floor(rnd * range);
            }
        }
        return number;
    }
    var getElement= function(txt, index){
        var element = "<p id='bg-skill-"+index+"' class='bg-skill'>"+txt+"</p>";
        return element;
    }
    var checkCss = function(top, left, styles){
        var isSame = false;
        styles.forEach(function(style){
            var cssTop = parseInt(style.css.top);
            var cssLeft = parseInt(style.css.left);
            if(cssTop.between(top-12, top+12) && cssLeft.between(left-15, left+15)){
                isSame = true;
            }
        });
        return isSame;
    }
    var renderStyle = function(limit){
        var opacity, top, left, rndm, deg, orientation, rotate,  
            styles = [];
        
        for(i=0; i<limit; i++){
            top = getRandom(80, true);
            left = getRandom(85, true);
            opacity = 1;

            while(checkCss(top, left, styles)){
                top = getRandom(80, true);
                left = getRandom(85, true);
            }
            
            rndm = getRandom(5, false);
            deg = getRandom(14, true);
            orientation = Math.random() >= 0.5;
            if(orientation){
                rotate = "rotate("+deg+"deg)";
            }
            else{
                rotate = "rotate(-"+deg+"deg)";
            }
            styles.push({
                name:"#bg-skill-"+(i+1),
                css: {
                    top: top+"%",
                    left: left+"%",
                    color: colors[rndm],
                    opacity:opacity,
                    transform: rotate
                }
            })
        }
        return styles;
    }
    var applyStyle = function(styles){
        styles.map(function(style){
            $(style.name).css(style.css);
        });
    }
    var scrollHandler = function(scrollTop){
        var blur = 0,
            scale = 1,
            $bgContainer = $('.bg-container'),
            $btns = $('#scroll-down-btn, #refreshSkills');

        if(scrollTop > 150){
            blur = 5;
            scale = 1.6;
            $btns.css("opacity", 0);
        }
        else{
            blur = 0;
            scale = 1;
            $btns.css("opacity", 1);
        }
        $bgContainer.css({
            filter : "blur("+blur+"px)",
            transform : "scale("+scale+")"
        });
    }
    var initialize = function(skills){
        var elements = [],
            skill, styles,
            limit = skills.length;

        skills.map(function(txt, index){
            skill = getElement(txt, index+1);
            elements.push(skill);
        });
        $('.bg-container').append(elements);
        styles = renderStyle(limit);

        $(function(){
            var scrollTop,
                isScrolled = false;
            
            applyStyle(styles);
            
            $(window).scroll(function(){
                scrollTop = $(window).scrollTop();
                isScrolled = true;
            });
            scrollTimer = setInterval(function() {
                if (isScrolled) {
                    scrollHandler(scrollTop);
                    isScrolled = false;
                }
              }, 50);
            $('#scroll-down-btn').click(function(){
                $('html, body').animate({
                    scrollTop : $('.about-page-content').offset().top
                }, 1200);
            });
        });
    }
    var refresh = function(limit){
        var styles = renderStyle(limit);
        applyStyle(styles);
    }
    var clearScrollTimer = function(){
        clearInterval(scrollTimer);
    }
    return {
        init : initialize,
        refresh : refresh,
        clearScrollTimer : clearScrollTimer
    }
})(jQuery);