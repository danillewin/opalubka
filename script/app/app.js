$(function () {
    $(".header__item").on('click', function () {
        var speed =Math.abs($(this).index() - $(".header__item_active").index()) * 550,
            s = $('.main__section[name="'+ $(this).attr('href') +'"]');

        $('html, body').animate({ scrollTop : s.offset().top - 60}, speed);
    });
    
    var sectionRanges = [0];
    $(".main__section").each(function () {
        var range = $(this).offset().top + $(this).height() + parseInt($(this).css("margin-bottom")) % 2 - 60;
        sectionRanges.push(range);
    });
    
    $(window).on('scroll touchmove', function () {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $(".header__item_active").removeClass("header__item_active");
            $(".header__item:last-child").addClass("header__item_active");
            return;
        }
        
        for (var i in sectionRanges) {
            if (($(window).scrollTop()) < sectionRanges[i]) {
                var index = parseInt(i);

                $(".header__item_active").removeClass("header__item_active");
                $(".header__item:nth-child(" + index + ")").addClass("header__item_active");
                break;
            } 
        }	
    })

									
});