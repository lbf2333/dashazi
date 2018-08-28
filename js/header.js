$(function(){
	var pcount=getCookie('datas')
	var pcounty=JSON.parse(pcount)
	console.log(pcounty)
	var x=pcounty[0]
	$(".bycar_content a").html(x.pcount)
	var timer=setInterval(move,2000);
		function move(){
			//如果ul不在运动中  让它-160
			$(".nav_move_banner:not(:animated)").animate({top:-30},function(){
				//把最后一个元素添加到最后
				$(".nav_move_banner p:eq(0)").appendTo($(".nav_move_banner"));
				$(".nav_move_banner").css("top",0);
			})
		}
		//鼠标经过停止定时器
		
		
	//二级菜单切换
	$(".first_nav>li").mouseover(function(){
		var index=$(this).index()
		$(".switcher_parent").css("display","block")
		$(".switcher_parent .switcher").eq(index).css("display","block").siblings().css("display","none")
	})
	
	$(".switcher_parent").mouseover(function(){
		var index=$(this).index()
		$(".switcher_parent").css("display","block")
		$(".switcher_parent .switcher").eq(index).css("display","block").siblings().css("display","none")
	})
	
	$(".first_nav>li").mouseout(function(){
		var index=$(this).index()
		$(".switcher_parent").css("display","none")
	})	
		
	$(".switcher_parent").mouseout(function(){
		var index=$(this).index()
		$(".switcher_parent").css("display","none")
	})	
		$(".goin").click(function(){
			window.location.href="Registration.html"
		})
})



