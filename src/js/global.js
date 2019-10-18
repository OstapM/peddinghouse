(function ($) {
    $(document).ready(function(){ 
        $('.JS-banner-aside__toggle').click(function() {
            $('.JS-banner-aside').toggleClass('open-tab');
        });

        $('#JS-banner-tabs').easytabs(); 
    
    });


})(jQuery);


