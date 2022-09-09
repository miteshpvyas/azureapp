$(document).ready(function() {
    // Hero Slider 
    $('.owl-h-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000
    })

    // Meet Team Slider 
    $('.owl-team').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1080: {
                items: 4
            }
        }
    })

    // Testimonial Slider 
    $('.owl-testimonial').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000
    })
});

// Back to Top
$(window).scroll(function() {
    if ($(window).scrollTop() >= 100) {
        $("#top-back").fadeIn(100);
    } else {
        $("#top-back").fadeOut(100);
    }
});
$("#top-back").click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 300);
    return false;
});

// Scroll Menubar
$(window).scroll(function(e) {
    var scrollTop = 60;
    e.preventDefault();
    $('#header').addClass('fixed-header');
    if ($(window).scrollTop() < scrollTop) {
        $('#header').removeClass('fixed-header');
    }
});