(function ($) {
    "use strict";

    $(window).scroll(function () {
        if ($(this).scrollTop() > 45){
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    })


    new WOW().init();


    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>'
        ]
    });


    var propertyfilter = $('.propertylist-container').isotope({
        itemSelector: '.propertylist-item',
        layoutMode: 'fitRows'
    });
    $('#filterproperty li').on('click', function () {
        $("#filterproperty li").removeClass('active');
        $(this).addClass('active');

        propertyfilter.isotope({filter: $(this).data('filter')});
    })



    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 24,
        items: 2,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>'
        ],
        resposive : {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


})(jQuery);