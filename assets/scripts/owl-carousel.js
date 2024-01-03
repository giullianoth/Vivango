$(document).ready(function () {
    $(".owl-carousel#adventure-carousel").owlCarousel({
        margin: 20,
        autoWidth: true,
        items: 4
    });

    $(".owl-carousel#choose-city-carousel").owlCarousel({
        margin: 20,
        autoWidth: true,
        items: 5,
        nav: true
    });

    $(".owl-carousel#best-ratings-carousel").owlCarousel({
        margin: 20,
        autoWidth: true,
        items: 3
    });
});