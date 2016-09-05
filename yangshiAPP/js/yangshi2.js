/*		var ww=document.documentElement.scrollHeight||document.body.scrollHeight;
		var gd=document.getElementById('gd');*/
/*		window.onload=function(){
			var html=document.getElementsByTagName('html')[0];
			var pw=document.documentElement.clientWidth||document.body.clientWidth;
			console.log(pw);
			html.style.fontSize=(100/640)*pw+'px';
		}*/
		$(function(){
			var ww = $(document.body).width();
			var f = (100 / 720) * ww;
			$('html').eq(0).css({'fontSize':f+'px'});
		})
		$('.yq').click(function(){
			if($(this).attr('src')=='images/yq.png'){
				$(this).attr('src','images/dg.png');
				$(this).attr('width',0.36+'rem');
			}else{
				$(this).attr('src','images/yq.png');
				$(this).attr('width',0.32+'rem');
			}
		})
		$('.xzl').click(function(){
			$('.yq').attr('src','images/dg.png');
			$(this).attr('width',0.36+'rem');
		})
		$('.xzr').click(function(){
			console.log($('.yq').length);
			for(var i=0;i<$('.yq').length;i++){
				if($('.yq').eq(i).attr('src')=='images/dg.png'){
				$('.yq').eq(i).parent().remove();
				i=i-1;
			}
			}
		})