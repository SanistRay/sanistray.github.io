$(document).ready(function() {
    $('.header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

});
jQuery(document).ready(function($) {
    $('.header-price-rb').hover(function() {
        // навели мышь на элемент
        $('.header-transparent-button').css('width', '345px');
    }, function() {
        // убрали мышь с элемента
        $('.header-transparent-button').css('width', '');
    });
});