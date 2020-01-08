$(document).ready(function () {
    $('.slider').slick({
        draggable: true,
        arrows: false,
        dots: true,
        fade: true,
        speed: 900,
        infinite: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100
    });

    // search show
    $('.search-button').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.search-field').addClass('search-show');

        $("html").click(function (event) {
            if ($(event.target).closest(".search-field").length === 0) {
                $(".search-field").removeClass('search-show');
            }
        });
    });

    $('.search-icon').on('click', function () {
        $('.search-field').removeClass('search-show');
    });

    // mobile menu
    $('.mobile-menu-toggle').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('.menu').toggleClass('menu-open');
        $('body').toggleClass('overflow-h');
    });


    // product slider
    $('.product-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        swipe: false,
        touchMove: false,
        asNavFor: '.product-slider-nav'
    });
    $('.product-slider-nav').slick({
        slidesToShow: 1,
        adaptiveHeight: false,
        slidesToScroll: 1,
        asNavFor: '.product-slider-for',
        dots: false
    });

    if ($(window).width() < 991) {
        $('.product-slider-mobile').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            infinite: true,
            arrows: false,
            dots: true
        });
    }

    // dropdowns
    $(".dropdown-menu a").on('click', function (e) {
        e.preventDefault();
        $(this).closest('.dropdown-site').find(".selected").html($(this).text());
    });

    setTimeout(function(){
        $('#modal-order-selected').modal('hide')
    }, 4000);

    $('.login').on('click', function (e) {
        e.preventDefault();
        $('.registration-wrap').fadeOut(500);
        $('.on-click-wrap').fadeOut(500);
        $('.login-wrap').fadeIn(500);
    });

    $('.registration').on('click', function (e) {
        e.preventDefault();
        $('.login-wrap').fadeOut(500);
        $('.registration-wrap').fadeIn(500);
    });

    $('.on-click').on('click', function (e) {
        e.preventDefault();
        $('.login-wrap').fadeOut(500);
        $('.registration-wrap').fadeOut(500);
        $('.on-click-wrap').fadeIn(500);
    });

    $('.mobile-button').on('click', function (e) {
       $('.user-flow-wrap').addClass('show');
       $('body').addClass('overflow-h');
    });

    $('.delete-product').on('click', function () {
       $(this).closest('.busket-row').fadeOut(500);
    });

    if ($(window).width() < 768) {
        $('.collapse-text .collapse').removeClass('show');
    }

    $('.mobile-slide').zoom({
        on: 'toggle',
        touch: false
    });
});
