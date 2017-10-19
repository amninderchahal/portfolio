/* Jquery Code starts here */
$(document).ready(function(){
    $('.nav-link:first').addClass("nav-link-active");
    var link = "";
    $('.nav-link').click(function(){
        var href = $(this).attr('href');
        if(href===link) return;
        link = href;
        $('.top-line').animate({
            width: "100%"
        },800, function(){
            $('.top-line').css("width", "0");
        });
        $('.nav-link').removeClass("nav-link-active");
        $(this).addClass("nav-link-active");
    });
    $('.main').click(function(){
        if($('.sidebar').hasClass('sidebar-visible')){
            $('.sidebar-toggle>button').click();
        }
    });
    $('.sidebar-toggle>button').click(function(){
        $('.sidebar').toggleClass('sidebar-visible');
        $('.nav-link').toggleClass('navlink-visible');
        $('.sidebar-toggle').toggleClass('sidebar-toggle-active');
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
