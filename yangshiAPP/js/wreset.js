$(function(){
	var ww = $(document.body).width();
	var f = (100 / 640) * ww;
	$('html').eq(0).css({'fontSize':f+'px'});
})