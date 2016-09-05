window.onload=function(){
var txt=document.getElementById("txt");
var img=document.getElementById("bi");
var fb=document.getElementById("fb");
var tuijia=document.getElementById("bodtas");
	txt.onfocus=function(){
		txt.placeholder="";
		
	}
	txt.onblur=function(){
		txt.style.placeholder="写评论";
	}
	fb.onclick=function(){
		if(txt.value==""){
			alert('不能发布空的评论呦')
		}else{
			var hr='<div class=pinglunqu><img src=img/touxiang.png/><p class=names>我就是阿翔</p><p class=datatinmes>2015-09-14</p><p class=neitong>'+txt.value+'</p><p class=ppsoe><a href=>查看全部20条回复</a></p><a href=><img class=imss src=img/pinglun.png/></a><a href=><img class=imss src=img/zan.png/></a></div>';
			tuijia.innerHTML+=hr;
		}
		
	}
	}
	
