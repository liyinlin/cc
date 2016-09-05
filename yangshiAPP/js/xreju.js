var clik={
			cli: function (el,fn){
					var starx,stary,endx,endy;
					el.addEventListener('touchstart',function (e){
						var tces=e.touches[0];
						starx=tces.clientX;
						stary=tces.clientY;
						console.log(starx);
						console.log(stary);
					},false);
					el.addEventListener('touchend',function (e){
						var tces=e.changedTouches[0];
						endx=tces.clientX;
						endy=tces.clientY;
						console.log(endx);
						console.log(endy);
						if(Math.abs(endx-starx)<6||Math.abs(endy-stary)<6){
							fn();
						}
					},false)
				}
		}
/*1bu*/
var xjishub=document.getElementById("xjishub");
var xhuaji=document.getElementById("xhuanji");
var xr1=document.getElementById("xr1");
clik.cli(xhuaji,function (){
			xjishub.style.display='block';
			xhuaji.innerHTML='<a href="###">'+5+'</a>';
		})
clik.cli(xr1,function (){
			xjishub.style.display='none';
			xhuaji.innerHTML='<a href="###">'+"..."+'</a>';
		})
/*2bu*/
var xjishubb=document.getElementById("xjishubb");
var xhuajii=document.getElementById("xhuanjii");
var xr2=document.getElementById("xr2");
clik.cli(xhuajii,function (){
			xjishubb.style.display='block';
			xhuajii.innerHTML='<a href="###">'+5+'</a>';
		})
clik.cli(xr2,function (){
			xjishubb.style.display='none';
			xhuajii.innerHTML='<a href="###">'+"..."+'</a>';
		})
/*3bu*/
var xjishuc=document.getElementById("xjishuc");
var xhuajia=document.getElementById("xhuanjia");
var xr3=document.getElementById("xr3");
clik.cli(xhuajia,function (){
			xjishuc.style.display='block';
			xhuajia.innerHTML='<a href="###">'+5+'</a>';
		})
clik.cli(xr3,function (){
			xjishuc.style.display='none';
			xhuajia.innerHTML='<a href="###">'+"..."+'</a>';
		})
/*4bu*/
var xjishucc=document.getElementById("xjishucc");
var xhuajib=document.getElementById("xhuanjib");
var xr4=document.getElementById("xr4");
clik.cli(xhuajib,function (){
			xjishucc.style.display='block';
			xhuajib.innerHTML='<a href="###">'+5+'</a>';
		})
clik.cli(xr4,function (){
			xjishucc.style.display='none';
			xhuajib.innerHTML='<a href="###">'+"..."+'</a>';
		})
//换标题样式
//var nav=document.getElementById("nav");
//var as=nav.getElementsByTagName("a");
$('#nav a').click(function (){
			var i=$('#nav a').index(this);
			$('#nav a').eq(i).addClass('nselected').siblings().removeClass('nselected');
		})

//
//function xbian(xul,xli){
//	var starx,stary,endx,endy;
//var xul=document.getElementById(xul);var nselected=nav.getElementsByClassName("nselected");
//var xli=xul.getElementsByTagName("li");var i=0;
//for (var i = 0; i < xli.length; i++) {
//	xli[i].addEventListener('touchstart',function (e){
//			var tces=e.touches[0];
//			starx=tces.clientX;
//			stary=tces.clientY;
//			console.log(starx);
//			console.log(stary);
//		},false);
//		xli[i].addEventListener('touchend',function (e){
//			var tces=e.changedTouches[0];
//			endx=tces.clientX;
//			endy=tces.clientY;
//			console.log(endx);
//			console.log(endy);
//			if(Math.abs(endx-starx)<6||Math.abs(endy-stary)<6){
//				for(var dd=1;dd<xli.length;dd++){
//                xli[dd].style.className="";
//				}
//				 this.style.className="nselected";
//			}
//		},false)
//}
//		
//}
//xbian("nav","a");
