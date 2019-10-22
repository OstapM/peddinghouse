(function ($) {
    $(document).ready(function(){ 
        $('.JS-banner-aside__toggle').click(function() {
            $('.JS-banner-aside').toggleClass('open-tab');
        });

        if ( $( "#JS-banner-tabs" ).length ) {
            $('#JS-banner-tabs').easytabs();
        }

        if ( $( ".swiper-container" ).length ) {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 2,
                spaceBetween: 0,
                pagination: {
                el: '.swiper-pagination',
                clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                767: {
                    slidesPerView: 1,
                },
                }
            });
        }
    
    });


})(jQuery);


