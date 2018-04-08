export const BackgroundSkillsModule = function($) {
    var $window = $(window),
        $bgContainer, $buttons, $scrollDownBtn,
        colors = ['#B8860B', '#03A678', '#3477DB', '#F64747', '#9B59B6'];

    var _isNumberBetween = function(number, a, b) {
        var min = Math.min(a, b),
            max = Math.max(a, b);
    
        return number > min && number < max;
    }

    var _getRandomNumber = function(range, checkLimit) {
        var rndm = Math.random(),
            number = Math.floor(rndm * range);

        if (checkLimit) {
            while (number < 4) {
                rnd = Math.random();
                number = Math.floor(rnd * range);
            }
        }
        return number;
    }
    var _checkOverlappingStyle = function(top, left, styles) {
        var cssTop, cssLeft, checkCssTop, checkCssLeft,
            isSame = false;
        styles.forEach(function(style) {
            cssTop = parseInt(style.css.top);
            cssLeft = parseInt(style.css.left);
            checkCssTop = _isNumberBetween(cssTop, top - 12, top + 12);
            checkCssLeft = _isNumberBetween(cssLeft, left - 15, left + 15);
            if (checkCssTop && checkCssLeft) {
                isSame = true;
            }
        });
        return isSame;
    }
    var _getCssForElement = function(counter, styles) {
        var rotateProp, randomIndex, degree, isClockwise,
            top = _getRandomNumber(80, true),
            left = _getRandomNumber(85, true),
            elementNumber = counter + 1;

        while (_checkOverlappingStyle(top, left, styles)) {
            top = _getRandomNumber(80, true);
            left = _getRandomNumber(85, true);
        }

        randomIndex = _getRandomNumber(5, false);
        degree = _getRandomNumber(14, true);
        isClockwise = Math.random() >= 0.5;
        if (isClockwise) {
            rotateProp = "rotate(" + degree + "deg)";
        } else {
            rotateProp = "rotate(-" + degree + "deg)";
        }
        return {
            elementId: "#bg-skill-" + elementNumber,
            css: {
                top: top + "%",
                left: left + "%",
                color: colors[randomIndex],
                transform: rotateProp
            }
        }
    }
    var _createStyleArray = function(elementCount) {
        var styles = [];

        for (i = 0; i < elementCount; i++) {
            var style = _getCssForElement(i, styles);
            styles.push(style);
        }
        return styles;
    }
    var _getElementsArray = function(skills) {
        var elements = [],
            element, elementNumber;

        skills.map(function(txt, index) {
            elementNumber = index + 1;
            element = "<p id='bg-skill-" + elementNumber + "' class='bg-skill'>" + txt + "</p>"
            elements.push(element);
        });
        return elements;
    }
    var _applyStyleToSkillsText = function(styles) {
        styles.map(function(style) {
            $(style.elementId).css(style.css);
        });
    }
    var _animateOnScroll = function(scrollTop) {
        var blur = 0,
            scale = 1;

        if (scrollTop > 150) {
            blur = 5;
            scale = 1.6;
            $buttons.css("opacity", 0);
        } else {
            blur = 0;
            scale = 1;
            $buttons.css("opacity", 1);
        }
        $bgContainer.css({
            filter: "blur(" + blur + "px)",
            transform: "scale(" + scale + ")"
        });
    }
    var _bindJqueryEvents = function(data) {
        $bgContainer = $('.bg-container');
        $buttons = $('#scroll-down-btn, #refreshSkills');
        $scrollDownBtn = $('#scroll-down-btn');
        $bgContainer.append(data.elements);

        $(function() {
            var scrollTop;
            _applyStyleToSkillsText(data.stylesArray);
            $window.scroll(function() {
                scrollTop = $(window).scrollTop();
                _animateOnScroll(scrollTop);
            });
            $scrollDownBtn.click(function() {
                $('html, body').animate({
                    scrollTop: $('.about-page-content').offset().top
                }, 1200);
            });
        });
    }
    var init = function(skills) {
        var stylesArray, elements,
            count = skills.length;

        elements = _getElementsArray(skills);
        stylesArray = _createStyleArray(count);
        var data = {
            elements: elements,
            stylesArray: stylesArray
        }
        _bindJqueryEvents(data);
    }
    var refresh = function(count) {
        stylesArray = _createStyleArray(count);
        _applyStyleToSkillsText(stylesArray);
    }
    return {
        init: init,
        refresh: refresh
    }
}