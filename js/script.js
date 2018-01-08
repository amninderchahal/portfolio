(function($){
    var link = "";
    function toggleNav(){
        $('.sidebar').toggleClass('sidebar-visible');
        $('.nav-link').toggleClass('navlink-visible');
        $('.sidebar-toggle').toggleClass('sidebar-toggle-active');
    }
    function preventSamePageReload(){
        var $this = $(this),
            href = $this.attr('href');
        if(href===link) 
            return;
        link = href;
        if($('.sidebar').hasClass('sidebar-visible')) 
            toggleNav();
    }
    $(document).ready(function(){
        /* Prevent same page reload on nav click */
        $('.nav-link').on('click', preventSamePageReload);

        /* Hide navbar on mobile when user clicks on body */
        $('.main').on('click', function(){
            if($('.sidebar').hasClass('sidebar-visible')){
                $('.sidebar-toggle>button').trigger('click');
            }
        });
        $('.sidebar-toggle>button, .navlink-visible').on("click", toggleNav);
    });
})(jQuery);