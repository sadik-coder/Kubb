$(function () {
    // back to top
    $('.bottom-to-up').click(function () {
        $('html, back').animate({
            scrollTop: 0
        }, 2000);
    });

    // sticky menu

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 100) {
            $('.header').addClass('bg');
        } else {
            $('.header').removeClass('bg');

        }
    });
    
$(window).on('load', function(){
    $('.preloder').delay(500).fadeOut(500);
})




});
