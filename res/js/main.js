$(function() {
    var clientHeight = document.documentElement.clientHeight,
        posts_top = clientHeight / 2 - 155;
    // 初始化posts margin-top
    $('.posts').css({
        'margin-top': posts_top
    }).removeClass('none');
    // 初始化footer height
    $('.site-footer').css({
        'height': posts_top + 20
    });
    $(document).on('scroll', function() {
        // post 滚入 header
        if ($(document).scrollTop() > (posts_top - 90)) {
            $('.site-header').addClass('above');
        } else {
            $('.site-header').removeClass('above');
        }
        // footer toggle
        if ($(document).scrollTop() > 5) {
            $('.site-footer').fadeOut(500);
        } else {
            $('.site-footer').fadeIn(300);
        }
    });
});