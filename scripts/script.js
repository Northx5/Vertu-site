$(document).ready(function () {
    // Carousel
    $('.info__slider').slick({
        infinite: true,
    });
    // Colour Selector
    var initialColour = $('.colours__swatches li:first').text();
    $('.colours__swatches li:first').addClass('is-selected');
    $('.colour-selected').text(initialColour);

    $('.colours__swatches').children().click(function () {
        var chosenColour = $(this).attr('data-vehicle-colour'),
            colourName = $(this).text(),
            imgType = $(this).parent().attr('data-img-type'),
            imgSource = "img/colours/" + chosenColour + imgType;
        $('.colours__img').attr('src', imgSource);
        $(this).siblings().removeClass('fas fa-check is-selected');
        $(this).addClass('fas fa-check is-selected');
        $('.colour-selected').text(colourName);
    });
    //Hamburger Nav
    function toggleMenu() {
        if ($("#hm2").hasClass('display-none')) {
            $("#hm2").removeClass('display-none');
            $("#hm2").addClass('display-grid');
        }
    }
    function hamClose() {
        if ($("#hm2").hasClass('display-grid')) {
            $("#hm2").removeClass('display-grid');
        }
    }
});