
//换标题样式

$('#nav a').click(function (){
			var i=$('#nav a').index(this);
			$('#nav a').eq(i).addClass('nselected').siblings().removeClass('nselected');
		})

