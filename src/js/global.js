(function ($) {

    // function testAnim(x) {
    //     $(this).removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    //         $(this).removeClass();
    //     });
    // };


    $(document).ready(function () {
        
        var comprasionTable = $('.s-comparison-table');

        if (comprasionTable.length !== 0) {
            var shopperNext = $('.JS-shopper-pagination .c-slider-button--next'); 
            var shopperPrev = $('.JS-shopper-pagination .c-slider-button--prev');
            var shopperTransformBlock = $('.c-shopper__innerdiv');
            var shopperTransform = 0;


            shopperNext.on('click', function () {
                if(shopperTransform <= 0 && shopperTransform > -560) {
                    shopperTransform = shopperTransform - 140;
                    shopperTransformBlock.css('transform', 'translateX('+shopperTransform+'px)');
                    shopperTransform;
                    if(shopperTransform == -560) {
                        shopperNext.addClass('swiper-button-disabled');
                    }
                    else {
                        shopperNext.removeClass('swiper-button-disabled');
                        shopperPrev.removeClass('swiper-button-disabled');
                    }
                }
            });

            shopperPrev.on('click', function () {
                if(shopperTransform < 0 && shopperTransform >= -560) {
                    shopperTransform = shopperTransform + 140;
                    shopperTransformBlock.css('transform', 'translateX('+shopperTransform+'px)');
                    shopperTransform;
                    if(shopperTransform == 0) {
                        shopperPrev.addClass('swiper-button-disabled');
                    }
                    else if(shopperTransform != 0) {
                        shopperPrev.removeClass('swiper-button-disabled');
                        if(shopperTransform > -560) {
                            shopperNext.removeClass('swiper-button-disabled');
                        }
                    }
                }
            });
        }


            function closeUserMenu(){
                userMenu.removeClass('is-visible');
            }

            jQuery(".mega-menu").on('after_mega_menu_init', function () {
                var megaMenuTopLink = $('li.mega-menu-item');

                megaMenuTopLink.on('open_panel', function () {
                    closeUserMenu();
                    $('body').addClass('body-overlay');
                });

                megaMenuTopLink.on('close_panel', function () {
                    $('body').removeClass('body-overlay');
                    if($('.JS--user-menu').hasClass('is-visible')) {
                        $('body').addClass('body-overlay');
                    }
                });
            });

        
        $('.mega-menu-link').on('click', function () {
            if($('.mega-menu-item').hasClass('mega-toggle-on')){
                $('.mega-menu-item').removeClass('mega-toggle-on');
            }
            if($('.JS--user-menu').hasClass('is-visible')){
                $('.JS--user-menu').removeClass('is-visible');
            }
            if($('body').hasClass('body-overlay')){
                $('body').removeClass('body-overlay');
            }

        });

        var userMenu = $('.JS--user-menu');
        $('body').on('click','.JS--open-user-menu', function () {

            if(!userMenu.hasClass('is-visible')){
                userMenu.addClass('is-visible');
            }
            if(!$('body').hasClass('body-overlay')){
                $('body').addClass('body-overlay');
            }

        });

        jQuery(document).on('click',function (e) {
            if(userMenu.hasClass('is-visible')) {
                var el = '.JS-site-header';
                if (jQuery(e.target).closest(el).length) return;
                if(userMenu.hasClass('is-visible')){
                   userMenu.removeClass('is-visible');
    
                }
                if($('body').hasClass('body-overlay')){
                   $('body').removeClass('body-overlay');
                }
            }
        });

        $('.JS--scroll-play').on('click', function () {
            var headerHeight = $('.site-header').outerHeight();
            var el = $('.c-video');
            var bottom = el.offset().top;
            $('html,body').animate({
                scrollTop: bottom - headerHeight
            }, 800);
            return false;
        });

        $('.JS--scroll-down').on('click', function () {
            var headerHeight = $('.site-header').outerHeight();
            var el = $('.o-page-banner__wrapper');
            var bottom = el.offset().top + el.outerHeight(true);
            $('html,body').animate({
                scrollTop: bottom - headerHeight
            }, 800);
            return false;
        });


        var productsSlider = $('.JS--home-products-slider');

        if (productsSlider.length !== 0) {
            var swiper = new Swiper(productsSlider, {
                slidesPerView: 3.3,
                spaceBetween: 32,
                // loop: true,
                //loopAdditionalSlides: 10,
                navigation: {
                    nextEl: '.JS--home-products-slider .c-slider-button--next',
                    prevEl: '.JS--home-products-slider .c-slider-button--prev',
                },
                breakpoints: {
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                }
            });
        }

        // var swiper = new Swiper('.timeline-swiper-container .swiper-container', {
        //     direction: 'vertical',
        //     slidesPerView: 'auto',
        //     freeMode: true,
        //     scrollbar: {
        //       el: '.swiper-scrollbar',
        //     },
        //     mousewheel: true,
        //   });


        var catalogueSlider = $('.JS--catalog-products-slider');
        var sliderShow = ($('.JS--catalog-products-slider .swiper-slide').length > 4) ? 4.3 : 4;
        if (catalogueSlider.length !== 0) {

            var swiper = new Swiper(catalogueSlider, {
                slidesPerView: 'auto',
                
                spaceBetween: 32,
                navigation: {
                    nextEl: '.JS--catalog-products-slider .c-slider-button--next',
                    prevEl: '.JS--catalog-products-slider .c-slider-button--prev',
                },
                breakpoints: {
                    1600: {
                        slidesPerView: sliderShow,
                        spaceBetween: 16,
                    },
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },
                    991: {
                        slidesPerView: 'auto',
                        spaceBetween: 16,
                    },
                }
            });
        }


        initFractionSlider();


        var certificationsSlider = $('.JS--certifications-slider');

        if (certificationsSlider.length !== 0) {
            var certificationsSlider = new Swiper(certificationsSlider, {
                slidesPerView: 2,
                centeredSlides: true,
                pagination: {
                    el: '.JS--certifications-slider .c-slider-pagination--fraction',
                    type: 'fraction',
                    formatFractionCurrent: function (number) {
                        if (number < 10) {
                            return '0' + number;
                        }
                        return number;
                    },
                    formatFractionTotal: function (number) {
                        if (number < 10) {
                            return '0' + number;
                        }
                        return number;
                    },
                },
                navigation: {
                    nextEl: '.JS--certifications-slider .c-slider-button--next',
                    prevEl: '.JS--certifications-slider .c-slider-button--prev',
                },
                breakpoints: {
                    991: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    }
                }
            });
        }

        if ($('#specifications-tabs').size() > 0) {
            $('#specifications-tabs').easytabs({
                updateHash: false
            });
        }

        if ($('#tabs-dashboar').size() > 0) {

            $('#tabs-dashboar').easytabs({
                updateHash: false
            });
        }

        var accordion = function (options) {
            var accordion_btn = options.btn_class;
            var accordion_content = options.content_class;
            var accordion_active = options.active_class;
            var initialize = function () {
                $(accordion_content).hide();
            };
            initialize();
            var bindEvents = function () {
                $('body').on('click', accordion_btn, function () {
                    $(this).toggleClass(accordion_active);
                    $(accordion_btn).not($(this)).removeClass(accordion_active);
                    if ($(this).hasClass(accordion_active)) {
                        $(this).parent().parent().find(accordion_content).slideDown();
                        $(accordion_btn).not($(this)).parent().parent().find(accordion_content).slideUp();
                    } else {
                        $(this).parent().parent().find(accordion_content).slideUp();
                    }
                });
            };
            bindEvents();

        };

        var accordions = new accordion({
            btn_class: '.JS--accordion-button',
            content_class: '.JS--accordion-content',
            active_class: 'JS--accordion_open'
        });

        // $(".c-news--releases").hover(
        //     // function () {
        //     //     testAnim("bounceOut");
        //     // }
        //  );

        $('.c-circle-modal__block').each(function () {
            var container = $(this);
            var service = container.data('service');
            $('#' + service).on('click', function () {
                event.preventDefault();
                $($(this).data('modal')).modal();
                return false;
                var farmersSwiper = new Swiper('.JS--farming-slider', {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    pagination: {
                        el: '.JS--farming-slider .c-slider-pagination--fraction',
                        type: 'fraction',
                    },
                    navigation: {
                        nextEl: '.JS--farming-slider .c-slider-button--next',
                        prevEl: '.JS--farming-slider .c-slider-button--prev',
                    },
                });
            });
        });

        function animateFunction() {
            $(".c-circle-modal__color").each(function () {
                $(this).addClass("animate");
                $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                    function (e) {
                        $(this).removeClass('animate');
                    });
            });

            $(".c-circle-modal__text").each(function () {
                $(this).addClass("animate-text");
                $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                    function (e) {
                        $(this).removeClass('animate-text');
                    });
            });

            $(".c-circle-modal__btn").each(function () {
                $(this).addClass("animate-btn");
                $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                    function (e) {
                        $(this).removeClass('animate-btn');
                    });
            });
        }

        // animateFunction();


        // *************
        extraLengthOne = $('.JS--class-slider-one .swiper-slide').length;
        extraLengthTwo = $('.JS--class-slider-two .swiper-slide').length;
        extraLengthThree = $('.JS--class-slider-three .swiper-slide').length;

        if (extraLengthOne > 1) {
            var classOneSwiper = new Swiper('.JS--class-slider-one', {
                slidesPerView: 1,
                pagination: {
                    el: '.JS--class-slider-one .c-slider-pagination--fraction',
                    type: 'fraction',
                },
                navigation: {
                    nextEl: '.JS--class-slider-one .c-slider-button--next',
                    prevEl: '.JS--class-slider-one .c-slider-button--prev',
                },
            });
        } else {
            $('.JS--class-slider-one .o-fraction-slider__footer').css('display', 'none');
        }

        if (extraLengthTwo > 1) {
            var classTwoSwiper = new Swiper('.JS--class-slider-two', {
                slidesPerView: 1,
                pagination: {
                    el: '.JS--class-slider-two .c-slider-pagination--fraction',
                    type: 'fraction',
                },
                navigation: {
                    nextEl: '.JS--class-slider-two .c-slider-button--next',
                    prevEl: '.JS--class-slider-two .c-slider-button--prev',
                },
            });
        } else {
            $('.JS--class-slider-two .o-fraction-slider__footer').css('display', 'none');
        }

        if (extraLengthThree > 1) {
            var classThreeSwiper = new Swiper('.JS--class-slider-three', {
                slidesPerView: 1,
                pagination: {
                    el: '.JS--class-slider-three .c-slider-pagination--fraction',
                    type: 'fraction',
                },
                navigation: {
                    nextEl: '.JS--class-slider-three .c-slider-button--next',
                    prevEl: '.JS--class-slider-three .c-slider-button--prev',
                },
            });
        } else {
            $('.JS--class-slider-three .o-fraction-slider__footer').css('display', 'none');
        }
        // *************

        animationAdded = false;
        $(window).scroll(function () {
            var sustanabilityElements = $(".s-sustainability-elements");
            if (sustanabilityElements.length) {
                sustainabilityTop = $(".s-sustainability-elements").offset().top;
                if (!animationAdded && $(this).scrollTop() > sustainabilityTop) {
                    animateFunction();
                    animationAdded = true;
                }
            }


        });

        if ($(".JS-s-anchors-menu").length) {
            
            if($(window).width() < 768) {
                var anchorFixHeight = $('.JS-s-anchors-menu').outerHeight();
                $('.JS-s-anchors__after').css('height', anchorFixHeight);

                $('.JS-s-anchors-menu').on('click', function() {
                    $('.JS-s-anchors-menu').toggleClass('close');
                });
            };

            $(window).on('load resize', function () {
                if($(window).width() >= 768) {
                    var anchorHeight = $(".JS-s-anchors-menu").outerHeight();
                    var anchorsTop = $(".JS-s-anchors-menu").offset().top;
                    var headerHeight = $(".JS-site-header").outerHeight();
                    var headerHide = anchorsTop - headerHeight;
                    if ($(window).scrollTop() >= anchorsTop) {
                        $('.JS-site-header').css({'position': 'absolute', 'top': headerHide, 'overflow': 'hidden'});
                        $('.JS-s-anchors-menu').addClass('fixed');
                        $(".JS-s-anchors-menu").next().css('margin-top', anchorHeight);
                    }

                
                    $(window).scroll(function () {
                        if ($(window).scrollTop() >= anchorsTop) {
                            $('.site-content').css({'padding-top': '60px'});
                            $('.JS-s-anchors-menu').addClass('fixed');
                            $('.JS-site-header').css({'position': 'absolute', 'top': headerHide, 'overflow': 'hidden'});
                        }
                        else if ($(window).scrollTop() < anchorsTop) {                        
                            $('.JS-s-anchors-menu').removeClass('fixed');
                            $('.site-content').css({'padding-top': '0'});                        
                            if ($(window).scrollTop() > headerHide) {
                                $('.JS-site-header').css({'position': 'absolute', 'top': headerHide, 'overflow': 'hidden'});
                            }
                            else {
                                $('.JS-site-header').css({'position': 'fixed', 'top': 0, 'overflow': 'visible'});
                            }
                        }
                    });
                }

                if($(window).width() < 768) {
                    var anchorHeight = anchorFixHeight;
                    var anchorsBottom = $('.JS-s-anchors__after').offset().top + anchorHeight - 60;
                    var headerHeight = $(".JS-site-header").outerHeight();
                    var headerHide = anchorsBottom - headerHeight;
                    
                    if ($(window).scrollTop() >= anchorsBottom) {
                        $('.JS-site-header').css({'position': 'absolute', 'top': headerHide, 'overflow': 'hidden'});
                        $('.JS-s-anchors-menu').addClass('fixed close');
                    }
                
                    $(window).scroll(function () {
                        if ($(window).scrollTop() >= anchorsBottom) {
                            $('.JS-s-anchors-menu').addClass('fixed close');
                            $('.JS-site-header').css({'position': 'absolute', 'top': headerHide, 'overflow': 'hidden'});
                        }
                        else if ($(window).scrollTop() < anchorsBottom) {
                            
                            $('.JS-s-anchors-menu').removeClass('fixed close');
                            $('.s-anchors__after').css('padding-top', '0');
                            
                            if ($(window).scrollTop() > headerHide) {
                                $('.JS-site-header').css({'position': 'absolute', 'top': headerHide, 'overflow': 'hidden'});
                            }
                            else {
                                $('.JS-site-header').css({'position': 'fixed', 'top': 0, 'overflow': 'visible'});
                            }
                        }
                    });
                }
            });
        }
        var $root = $('html, body');
        var anchorHeight = $(".JS-s-anchors-menu").outerHeight();
        $('.c-anchors-menu__menu-item a[href^="#"]').click(function () {
            $('.JS-s-anchors-menu').addClass('close');
            if($(window).width() < 768) {
                $root.animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 60
                }, 500);
            }

            if($(window).width() >= 768) {
                $root.animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - anchorHeight
                }, 500);
            }

            return false;
        });

        if($(window).width() < 768) {
            $('.counter').each(function () {
                $(this).removeClass('counter');
            });
        }

        function countFunction() {
            var stopCount = false;
            $('.counter').each(function () {
                if (stopCount == false) {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        },
                        complete: function () {
                            $(this).text(this.countNum);
                            $('.c-shopper__row .c-shopper__col:nth-child(2) .c-shopper__text').removeClass('count');
                            stopCount = true;
                            console.log(stopCount);
                        }
                    });
                }
            });
        };

        if ($(".c-shopper").length) {
            var countCheck = 0;
            $(window).scroll(function () {
                var oTop = $('.c-shopper').offset().top - window.innerHeight;
                if (countCheck == 0 && $(window).scrollTop() > oTop) {
                    countFunction();
                    countCheck = 1;
                }
            });
        }

        AOS.init({
            easing: 'ease-out-back',
            duration: 1000
        });


        $('.popup-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true,
            alignTop: true,
            callbacks: {
                elementParse: function (item) {
                    var magnificPopup = $.magnificPopup.instance.wrap,
                        modalId = item.src.substring(1);
                    $(magnificPopup).toggleClass(modalId + '-wrap');
                },
                open: function () {
                    $('html').css({"overflow": "hidden", "position": "relative", "height": "100%"});
                    $('body').css({"overflow": "hidden", "position": "relative", "height": "100%"});
                    console.log('add')
                    $('body').addClass('overflow');
                    console.log('add +')
                    initFractionSlider();
                },
                close: function() {
                    $('html').css({"overflow": "visible", "position": "relative", "height": "auto"});
                    $('body').css({"overflow": "visible", "position": "relative", "height": "auto"});
                    $('body').removeClass('overflow');
                }
            }
        });

        $('.popup-modal-dismiss').click(function (e) {
            e.preventDefault();
            $.magnificPopup.close();
            animateFunction();
        });

        $('.JS--modals-wrapper').magnificPopup({
            delegate: 'a.JS--posts-modal',
            type: 'inline',
            // preloader: false,
            modal: true,
            alignTop: true,
            callbacks: {
                open: function () {
                    initFractionSlider();
                }
            }
        });

        $('.JS--section-subscribe').magnificPopup({
            delegate: 'a.JS--subscribe-popup',
            type: 'inline',
            modal: true,
            alignTop: true,
            callbacks: {
                open: function() {
                    $('html').css({"overflow": "hidden", "position": "relative", "height": "100%"});
                    $('body').css({"overflow": "hidden", "position": "relative", "height": "100%"});
                    $('body').addClass('overflow');
                },
                close: function() {
                    $('html').css({"overflow": "visible", "position": "relative", "height": "auto"});
                    $('body').css({"overflow": "visible", "position": "relative", "height": "auto"});
                    $('body').removeClass('overflow');
                }
            }
        });

        $('body').on('click', '.JS--close-posts-modal', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });

        // Select
        if ($('.js-example-basic-multiple').size() > 0) {
            $('.js-example-basic-multiple').select2();
        }

        function videoSection(item, index) {
            var btn = videoBtn[index];
            var id = btn.getAttribute('data-id');

            btn.addEventListener("click", function () {
                videojs(id).play();
            });

            videojs(id).on('play', function () {
                btn.classList.remove('is-active');
                videojs(id).controls(true);
            });

            videojs(id).on('pause', function () {
                btn.classList.add('is-active');
                videojs(id).controls(false);
            });
        }

        var videoBtn = document.querySelectorAll('.JS--video-btn');

        for (var i = 0; i < videoBtn.length; i++) {
            videoSection(videoBtn[i], i);
        }

    });


    function initFractionSlider() {
        var fractionSlider = $('.JS--fraction-slider');

        if (fractionSlider.length !== 0) {
            var fractionSwiper = new Swiper(fractionSlider, {
                slidesPerView: 1,
                observer: true,
                observeParents: true,
                // loop: true,
                pagination: {
                    el: '.JS--fraction-slider .c-slider-pagination--fraction',
                    type: 'fraction',
                    formatFractionCurrent: function (number) {
                        if (number < 10) {
                            return '0' + number;
                        }
                        return number;
                    },
                    formatFractionTotal: function (number) {
                        if (number < 10) {
                            return '0' + number;
                        }
                        return number;
                    },
                },
                navigation: {
                    nextEl: '.JS--fraction-slider .c-slider-button--next',
                    prevEl: '.JS--fraction-slider .c-slider-button--prev',
                },
                on: {
                    transitionStart: function () {
                        $('.c-fraction-slider__text').css('opacity', '0');
                    },
                    transitionEnd: function () {
                        $('.c-fraction-slider__text').css('opacity', '1');
                    },
                },
            });
        }
    }

  $(".js--logout").click(function(ev) {
    ev.preventDefault();
    $.post(ajaxurl, { action: "dashboard_logout" }, function(response) {
      window.location = response.redirect ? response.redirect : "/";
    }).fail(function(err) {
      if (err) {
        alert(err.responseText);
      }
    });
  });

//  $('.c-anchors-menu__menu').PromoMenu({
//   activeItemClassName: 'c-anchors-menu__menu-item--active',
//   easingFunc:'easeOutBack',
//   scrollingDuration:1000
//  });


    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        var viewportHalf = window.innerHeight * 0.5;
        var trigger = $(window).scrollTop() + viewportHalf;
    
        return elementBottom > viewportTop && elementTop < viewportBottom && trigger > elementTop && trigger < elementBottom ;
    };
    
    $(window).on('resize scroll', function() {
        $('.JS-anchor-block').each(function() {
            var activeLink = $(this).attr('id');
            var target = $('a[href*=' + activeLink + ']').closest('.c-anchors-menu__menu-item');
            if ($(this).isInViewport()) {           
                target.addClass('c-anchors-menu__menu-item--active');
            } else {
                target.removeClass('c-anchors-menu__menu-item--active');
            }
        });
    });


})(jQuery);


