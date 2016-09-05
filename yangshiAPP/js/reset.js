$(function() {
    var ww = $(document.body).width();
    var f = (20 / 640) * ww;
    $('html').eq(0).css({ 'fontSize': f + 'px' });
    $('body').css({ 'display': 'block' });
})