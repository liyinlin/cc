$('.pdlb p').click(function() {
    var i = $(this).index();
    $(this).attr('class', 'pdselected').siblings().removeAttr('class');
    $('.pdnr').eq(i).attr('class', 'pdnr');
    $('.pdnr').not($('.pdnr').eq(i)).addClass('pdnrhide')
})