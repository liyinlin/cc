$(function(){
	var imgs=0;
	var time;
	var lis=document.getElementById("uls").getElementsByTagName('li');
	var pp=document.getElementById("p1");
	$timer = setInterval(run,3000);
	function run(){
		lis[imgs].className='';
		imgs++;
		if(imgs==3){
			imgs=0;
		}
		if(imgs==0){
			pp.innerHTML="习近平召见美国总统奥巴马";
		}
		if(imgs==1){
			pp.innerHTML="奔跑吧兄弟团之宝宝的悲伤";
		}
		if(imgs==2){
			pp.innerHTML="詹皇的百步上篮拯救骑士";
		}
		lis[imgs].className='lis';
		$('#gs img').hide();
		$('#gs img').eq(imgs).fadeIn('slow');
	}
	function runL(){
//		clearInterval($timer);
		lis[imgs].className='';
		imgs++;
		if(imgs==3){
			imgs=0;
		}
		if(imgs==0){
			pp.innerHTML="习近平召见美国总统奥巴马";
		}
		if(imgs==1){
			pp.innerHTML="奔跑吧兄弟团之宝宝的悲伤";
		}
		if(imgs==2){
			pp.innerHTML="詹皇的百步上篮拯救骑士";
		}
		lis[imgs].className='lis';
		$('#gs img').hide();
		$('#gs img').eq(imgs).fadeIn('slow');
		
		
	}
	function runR(){
//		clearInterval($timer);
		lis[imgs].className='';
				/*console.log($imgcount);*/
				imgs --;
				if(imgs == -1){
					imgs = 2;
				}
				if(imgs == 3){
					imgs = 0;
				}
				lis[imgs].className='';
				if(imgs==0){
					pp.innerHTML="习近平召见美国总统奥巴马";
				}
				if(imgs==1){
					pp.innerHTML="奔跑吧兄弟团之宝宝的悲伤";
				}
				if(imgs==2){
					pp.innerHTML="詹皇的百步上篮拯救骑士";
				}	
		lis[imgs].className='lis';
				$("#gs img").hide();
				$("#gs img").eq(imgs).fadeIn("slow");
				
			}
		var $startX,$startY,isMove = false;
			$("#gs")[0].addEventListener("touchstart",function(event){
				event.preventDefault();  //取消默认事件
				var touch = event.changedTouches[0];  //返回第一次触摸的位置
				$startX = touch.pageX;  //page相对于整体页面的位置，不是相对于屏幕的位置
				$startY = touch.pageY;
				isMove = false;
				clearInterval($timer);
			},false);
			
			$("#gs")[0].addEventListener("touchmove",function(event){
				/*console.log(1);*/
				event.preventDefault();
				// var touch = event.changedTouches[0]; 
				isMove = true;
			},false);
			
			$("#gs")[0].addEventListener("touchend",function(event){
				event.preventDefault();
				var touch = event.changedTouches[0];
				var $endX = touch.pageX;
				var $endY = touch.pageY;
				if(isMove==false){
					return;
				}
				if($startX - $endX > 0){
					runL();
					$timer = setInterval(runL,3000);
				}else{
					runR();
					$timer = setInterval(runR,3000);
				}
			},false);
})


