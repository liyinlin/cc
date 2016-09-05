
			$(function() {
				var ww = $(document.body).width();
				var f = (100 / 640) * ww;
				$('html').eq(0).css({
					'fontSize': f + 'px'
				});
			})
			$(".tuijian span").click(function() {
				$(".tuijian .c").toggle();
			})
			$(".searchmorea").click(function(){
				$(".bozui img").attr("src","img/三图-横图.jpg");
			});
			$(".searchmoreb").click(function(){
				$(".bozui img").attr("src","img/三图-竖图.jpg");
			});
			$(".tu2 li,.a3a,.a3b").click(function() {
				window.location.assign("http://v.baidu.com/tv/23907.htm?frp=bdbrand");
			});

			var tima = null;
			var tim1 = null;
			var inde = 1;
			var shuju = ["奔跑吧兄弟", "行走吧加班生", "行尸走肉哦"];
			var wid = parseFloat($("#datu").css("width"));
			var step = wid;
			var len = ($(".tu1 a").length) * wid;
			$(".tu1").css({
				"width": len
			});
			$(".tu1 a").css({
				"width": wid
			});
			$("#datu").scrollLeft(wid);
			$(".tu2 li").eq(0).css("background", "firebrick");

			function zouawayr() {
				clearInterval(tima);
				clearInterval(tim1);
				var ff=true;
				tima = setInterval(function() {
					if(ff){
						ff=false;
						step = wid * inde;
						tim1 = setInterval(function() {
							step += 10;
							if(Math.floor(step % wid) < 10) {
								ff=true;
								clearInterval(tim1);
								inde++;
								step = inde * wid;
								if(inde == $(".tu1 a").length - 1) {
									inde = 1;
									$("#datu").scrollLeft(wid);
								}
								$(".tu2 li").eq(inde - 1).css("background", "firebrick").siblings().css("background", "");
								$(".tu2 span").html(shuju[inde - 1]);
							}
							$("#datu").scrollLeft(step);
						}, 1);
					}
				
				}, 4000);
			}

			function zour() {
				step = zou + wid * inde;
				tim1 = setInterval(function() {
					step += 10;
					if(Math.floor(step % wid) < 10) {
						clearInterval(tima);
						clearInterval(tim1);
						inde++;
						step = inde * wid;
						if(inde == $(".tu1 a").length - 1) {
							inde = 1;
							$("#datu").scrollLeft(wid);
						}
						zouawayr();
						$(".tu2 li").eq(inde - 1).css("background", "firebrick").siblings().css("background", "");
						$(".tu2 span").html(shuju[inde - 1]);
					}
					$("#datu").scrollLeft(step);
				}, 1);
			}

			function zoul() {
				step = wid * inde + zou;
				tim1 = setInterval(function() {
					step -= 10;
					if(Math.floor(step % wid) > -10) {
						step = inde * wid - wid;
						clearInterval(tim1);
						inde--;
						if(inde == 0) {
							inde = 3;
							$("#datu").scrollLeft(inde * wid);
						}
						zouawayr();
						$(".tu2 li").eq(inde - 1).css("background", "firebrick").siblings().css("background", "");
						$(".tu2 span").html(shuju[inde - 1]);
					}
					$("#datu").scrollLeft(step);
				}, 1);
			}
			zouawayr();
			var zou;
			var startx, starty, endx, endy;
			var flag = false;
			$("#datu").bind("touchstart", function(ev) {
				clearInterval(tim1);
				clearInterval(tima);
				var start = ev.touches[0];
				startx = start.pageX;
			});
			$("#datu").bind("touchmove", function(ev) {
				flag = true;
				ev.preventDefault();
				var start = ev.touches[0];
				endx = start.pageX;
				zou = startx - endx;
				if(Math.abs(zou) > 10) {
					$("#datu").scrollLeft(inde * wid + zou);
				}
			});
			$("#datu").bind("touchend", function(ev) {
				var start = ev.changedTouches[0];
				if(flag) {
					if(zou > 0) {
						zour();
					} else {
						zoul();
					}
				} else {
					//页面跳转根据inde的页面数进行跳转
				}
			});
	