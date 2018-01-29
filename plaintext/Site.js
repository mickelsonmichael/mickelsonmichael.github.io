
$(function () {
    // Get the title
    $header = $('.header-text'),
        // Get the height of the intro
        $initialPos = $('background').height();

    $(window).on('scroll', function() {
        var offset = $(window).scrollTop();

        if (offset > $initialPos && !$header.hasClass('fixed-top')) {
            $header.addClass('fixed-top');
        }
        else if (offset < $initialPos && $header.hasClass('fixed-top')) {
            $header.removeClass('fixed-top');
        }
    })

    $(window).on('resize', function () {
        // Reset the initialPosition
        $initialPos = $('background').height();

        // Check for resize again
        var offset = $(window).scrollTop();
        
        if (offset > $initialPos && !$header.hasClass('fixed-top')) {
            $header.addClass('fixed-top');
        }
        else if (offset < $initialPos && $header.hasClass('fixed-top')) {
            $header.removeClass('fixed-top');
        }
    })

})