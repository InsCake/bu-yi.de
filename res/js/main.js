$(function() {
    var clientHeight = document.documentElement.clientHeight,
        posts_top = clientHeight / 2 - 155;
    // 初始化posts margin-top
    $('.posts').css({
        'padding-top': posts_top
    }).removeClass('none');
    // 初始化footer height
    $('.toggle-footer').css({
        'height': posts_top
    });
    $(document).on('scroll', function() {
        var scroll_top = $(document).scrollTop();
        // post 滚入 header
        if (scroll_top > (posts_top - 90)) {
            $('.site-header').addClass('above');
        } else {
            $('.site-header').removeClass('above');
        }
        // footer toggle
        var toggle_footer = $('.toggle-footer');
        if (scroll_top > 5) {
            toggle_footer.fadeOut(300);
        } else {
            toggle_footer.fadeIn(300);
        }
    });
});