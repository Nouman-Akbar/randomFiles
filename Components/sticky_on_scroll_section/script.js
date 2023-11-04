$(document).ready(function () {
    const heading = $('#main_heading');
    const headingParent = $('.main_prod_col');
    const headingOffsetTop = headingParent.offset().top;
    if ($(window).width() > 992) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= (headingOffsetTop - 450)) {
                heading.css({
                    'position': 'fixed',
                    'transform': 'translate(0)'
                });
            }
            if ($(window).scrollTop() >= headingOffsetTop + 970) {
                heading.css({
                    'position': 'relative',
                    'top': '86%'
                });
                console.log(1);
            } else if ($(window).scrollTop() < headingOffsetTop - 450) {
                heading.css('position', 'relative');
            } else {
                heading.css('position', 'fixed');
                heading.css('top', 'initial');
            }
        });
    }
});