var as=document.getElementById('data-ul').getElementsByTagName('a');
	for(var i=0;i<as.length;i++){
		as[i].index=i;
		as[i].onclick=function(){
			for(var k=0;k<as.length;k++){
				as[k].id='';
			}
			as[this.index].id='tolis';
		}
	}
	
	$(function(){
			var ww = $(document.body).width();
			var f = (100 / 640) * ww;
			$('html').eq(0).css({'fontSize':f+'px'});
		});
		$('#jm').children().click(function(){
			window.location.href='http://v.baidu.com/tv/20690.htm?&q=%E4%BA%91%E4%B8%AD%E6%AD%8C&qq-pf-to=pcqq.c2c';
		});
		$('#jm1').children().click(function(){
			var index=$(this).index();
			if(index!=1){
				window.location.href='https://www.baidu.com/link?url=ur9QvGqPN-QdeafIg0PWrrtqdV1yOtY7apTZixhcYAF0lqicIsi6iddWCsGKrjJ20SGv82mN2Zl3CJdZamO9tU0_27Xp3K4At1plv6Plc8S&wd=&eqid=f089c1f6000152ef0000000357baa431';
			}else{
				window.location.href='https://www.baidu.com/link?url=eN8QzI37-pIj_1QA9hK2GoXKz3-OjMkhMB0KIXVlhcpfqjFEqBInsDVi7zrCptkL6nxbmbGrlzoiHqq6wplt2K&wd=&eqid=bb60b5bc000156020000000357baa454';
			}
		});
		$('#sl1').click(function(){
			window.location.href='https://www.baidu.com/link?url=L15ZxW7MbgdsCEna1suY7TBSzS9kv3dTFf1fakhWJzMORzb2g3CbtlEEnaLBThAQJZdtkP0vDmw32KJeUhMvSInjc8oa7vH0PRPdVOleN_K&wd=&eqid=a9b176250000f4490000000357baa338';
		});
		$('#sl2').click(function(){
			window.location.href='https://www.baidu.com/link?url=ur9QvGqPN-QdeafIg0PWrrtqdV1yOtY7apTZixhcYAF0lqicIsi6iddWCsGKrjJ20SGv82mN2Zl3CJdZamO9tU0_27Xp3K4At1plv6Plc8S&wd=&eqid=f089c1f6000152ef0000000357baa431';
		})
		$('#ly1').click(function(){
			$('#gd').css('display','block');
		})
		$('#ly').click(function(){
			$('#gd').css('display','block');
		})
		$('#dz').click(function(){

		})
		$('#dz1').click(function(){

		})
		$('#xpl').focus(function(){
			$('#xpl').val('');
		})
		$('#pl1').click(function(){
			$('#gd').css('display','none');
		})
		$('.last').click(function(){
			var pl=$('<div class="pl"><p class="ax"><span class="axs"><img src="images/axiang.png" alt=""></span>我就是阿翔<span class="asj">2015-09-14</span></p><p class="kr">'+$('.xpl').val()+'</p></div>');
			var p1=$('<p class="ck">查看全部20条回复<span class="dz" id="dz"><img src="images/dz.png" alt=""></span><span class="ly" id="ly"><img src="images/ly.png" alt=""></span></p>');
			$('.plq').append(pl);
			$('.plq').append(p1);
		})