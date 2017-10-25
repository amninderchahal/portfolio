(function($){
    var link = "";
    function toggleNav(){
        $('.sidebar').toggleClass('sidebar-visible');
        $('.nav-link').toggleClass('navlink-visible');
        $('.sidebar-toggle').toggleClass('sidebar-toggle-active');
    }
    function showPageLoadAnimation(){
        var $this = $(this),
            href = $this.attr('href');
        if(href===link) 
            return;
        link = href;
        $('.loading-line').animate({
            width: "100%"
            },800, function(){
                $('.loading-line').css("width", "0");
        });
        if($('.sidebar').hasClass('sidebar-visible')) 
            toggleNav();
    }
    $(document).ready(function(){
        $('.nav-link').on('click', showPageLoadAnimation);
        $('.main').on('click', function(){
            if($('.sidebar').hasClass('sidebar-visible')){
                $('.sidebar-toggle>button').click();
            }
        });
        $('.sidebar-toggle>button, .navlink-visible').on("click", toggleNav);
    });
})(jQuery);