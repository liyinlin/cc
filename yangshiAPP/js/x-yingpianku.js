function xbian(xul,xli){
	var starx,stary,endx,endy;
var xul=document.getElementById(xul);
var xli=xul.getElementsByTagName("li");var i=0;
for (var i = 0; i < xli.length; i++) {
	xli[i].addEventListener('touchstart',function (e){
			var tces=e.touches[0];
			starx=tces.clientX;
			stary=tces.clientY;
			console.log(starx);
			console.log(stary);
		},false);
		xli[i].addEventListener('touchend',function (e){
			var tces=e.changedTouches[0];
			endx=tces.clientX;
			endy=tces.clientY;
			console.log(endx);
			console.log(endy);
			if(Math.abs(endx-starx)<6||Math.abs(endy-stary)<6){
				for(var dd=1;dd<xli.length;dd++){
                  xli[dd].style.background="white";
				}
				this.style.background="#f5f5f5";
			}
		},false)
}
		
}
xbian("x-ul1","li");
xbian("x-ul2","li");
xbian("x-ul3","li");
xbian("x-ul4","li");
xbian("x-ul5","li");
/*换图片*/
//var clik={
//			cli: function (el,fn){
//					var starx,stary,endx,endy;
//					el.addEventListener('touchstart',function (e){
//						var tces=e.touches[0];
//						starx=tces.clientX;
//						stary=tces.clientY;
//						console.log(starx);
//						console.log(stary);
//					},false);
//					el.addEventListener('touchend',function (e){
//						var tces=e.changedTouches[0];
//						endx=tces.clientX;
//						endy=tces.clientY;
//						console.log(endx);
//						console.log(endy);
//						if(Math.abs(endx-starx)<6||Math.abs(endy-stary)<6){
//							fn();
//						}
//					},false)
//				}
//		}
//var huan1=document.getElementById("huan1");
//var yincang=document.getElementById("yincang"); 
//var yina=document.getElementById("yina"); 
//var huan2=document.getElementById("huan2"); 
//clik.cli(huan1,function (){
//			yincang.style.display='block';
//			yina.style.display='none';
//		})
//clik.cli(huan2,function (){
//			yincang.style.display='none';
//			yina.style.display='block';
//		})