/* Jquery Code starts here */
$(document).ready(function(){
    function toggleNav(){
        $('.sidebar').toggleClass('sidebar-visible');
        $('.nav-link').toggleClass('navlink-visible');
        $('.sidebar-toggle').toggleClass('sidebar-toggle-active');
    }
    var link = "";
    $('.nav-link').click(function(){
        var href = $(this).attr('href');
        if(href===link) return;
        link = href;
        $('.loading-line').animate({
            width: "100%"
        },800, function(){
            $('.loading-line').css("width", "0");
        });
        if($('.sidebar').hasClass('sidebar-visible')) toggleNav();
    });
    $('.main').click(function(){
        if($('.sidebar').hasClass('sidebar-visible')){
            $('.sidebar-toggle>button').click();
        }
    });
    $('.sidebar-toggle>button, .navlink-visible').click(function(){
        toggleNav();
    });
});

/* Angular Js Code starts here */
angular.module("portfolio", ["ngRoute",
                             "portfolio.projects"])
.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when("/" , {
        templateUrl : "views/about.html"
    })
    .when("/projects", {
        templateUrl : "views/projects.html",
        controller : "projectsCtrl"
    })
    .when("/contact", {
        templateUrl : "views/contact.html"
    });
    $locationProvider.hashPrefix('');
});
