var sch = document.documentElement.clientHeight;
$('#leftside').css({ 'height': sch });
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop: true,
    width: window.innerWidth,
    onSlideChangeEnd: function(swiper) {
            var n = swiper.activeIndex - 1;
            if (n == 3) {
                n = 0;
            }
            $('.bigpd p').eq(n).attr('class', 'bpshow').siblings().attr('class', 'bphide')
        }
        //      spaceBetween: 30,
});

// 修改swiper-slide的行间样式的width值
$('.swiper-slide').css({ 'width': '100%' });
var flag = true; //记录左侧导航栏是否已显示，显示为false，隐藏为true
var startx, starty, movex, movey, curpos, move;
var container = document.getElementById('container');
$('.userinfo img').eq(0).click(function(e) {
    var even = e || window.event;
    e.stopPropagation();
    if (flag) {
        container.style.webkitTransition = '-webkit-transform 0.5s';
        container.style.webkitTransform = 'translate3d(0, 0, 0)';
        flag = false;
    } else {
        container.style.webkitTransition = '-webkit-transform 0.5s';
        container.style.webkitTransform = 'translate3d(-19.25rem, 0, 0)';
        flag = true;
    }
})
document.addEventListener('touchstart', function(e) {
    var tou = e.touches[0];
    startx = tou.clientX;
    starty = tou.clientY;
})
document.addEventListener('touchmove', function(e) {
    var tou = e.touches[0];
    movex = tou.clientX - startx;
    movey = tou.clientY - starty;
    if (flag == false) {
        e.preventDefault();
    }
    if (flag) {
        if (Math.abs(movex) > Math.abs(movey) && movex / 20 > 0 && movex / 20 <= 19.25) {
            container.style.webkitTransform = 'translate3d(' + (movex / 20 - 19.25) + 'rem, 0, 0)';
        }
    } else {
        if (Math.abs(movex) > Math.abs(movey) && movex / 20 < 0 && movex / 20 >= -19.25) {
            container.style.webkitTransform = 'translate3d(' + (-19.25 - movex / 20) + 'rem, 0, 0)';
        }
    }
})
document.addEventListener('touchend', function(e) {
    if (flag) {
        if (movex / 20 > 8) {
            $('#leftside').css({ 'top': document.body.scrollTop });
            container.style.webkitTransition = '-webkit-transform 0.3s';
            container.style.webkitTransform = 'translate3d(0, 0, 0)';
            flag = false;
        } else {
            $('#leftside').css({ 'top': 0 });
            container.style.webkitTransition = '-webkit-transform 0.3s';
            container.style.webkitTransform = 'translate3d(-19.25rem, 0, 0)';
            flag = true;
        }
    } else {
        if (movex / 20 < -8) {
            container.style.webkitTransition = '-webkit-transform 0.3s';
            container.style.webkitTransform = 'translate3d(-19.25rem, 0, 0)';
            flag = true;
        } else {
            container.style.webkitTransition = '-webkit-transform 0.3s';
            container.style.webkitTransform = 'translate3d(0, 0, 0)';
            flag = false;
        }
    }
})