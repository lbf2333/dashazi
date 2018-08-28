$(function(){
	//引入头部
	$("#head").load("header.html",function(){
		$(".table_content").css("z-index","2")
//		$(".switcher_parent").css("z-index","3")
		localStorage.setItem('aa',123)
		var pcount=getCookie('datas')
		var pcountx=JSON.parse(pcount)
		console.log(pcountx)
		var x=pcountx[0]
		$(".bycar_content a").html(x.pcount)
	})
	//引入尾部
	$("#pageTail").load("foot.html",function(){
		
	})

//轮播部分
	$("#banner>ul>li").eq(2).css("z-index",1)
	$("#banner>ul>li").eq(3).css("z-index",0)
		var num=0;
		var timer=setInterval(move,2000)
		function move(){
			num++
			if(num>3){
				num=0
			}
				$('#banner>ul>li').eq(num).css("z-index",1).siblings().css("z-index",0)
				$('.info_background').eq(num).css("z-index",-1).siblings().css("z-index",-2)
				$(".qiehuan").eq(num).css("background","white").siblings().css("background","#ccc")
				
		}

		$("#banner").hover(function(){
			clearInterval(timer)
			$(".left_but").css("display","block")
			$(".right_but").css("display","block")
			
		},function(){
			timer=setInterval(move,2000)
			$(".left_but").css("display","none")
			$(".right_but").css("display","none")
		})
		$(".left_but").click(function(){
			move();
		})
		
		$(".right_but").click(function(){
			num--;
			if(num<0){
				num=3;
			}
			$('#banner>ul>li').eq(num).css("z-index",1).siblings().css("z-index",0)
				$('.info_background').eq(num).css("z-index",-1).siblings().css("z-index",-2)
				$(".qiehuan").eq(num).css("background","white").siblings().css("background","#ccc")
		})
		$(".qiehuan").click(function(){
			num=$(this).index();
//			console.log(num)
			$('#banner>ul>li').eq(num).css("z-index",1).siblings().css("z-index",0)
			$('.info_background').eq(num).css("z-index",-1).siblings().css("z-index",-2)
			$(".qiehuan").eq(num).css("background","white").siblings().css("background","#ccc")
		})
		
//		广告部分轮播
        var log=0;
		var timerr=setInterval(logmove,2000)
		function logmove(){
			log++
			if(log>2){
				log=0
			}
				$('.advertising_banner_wrap>div').eq(log).css("z-index",1).siblings().css("z-index",0)
				$(".advertising_banner_left ul>li").eq(log).css("background","white").siblings().css("background","#ccc")
				
		}

		$(".advertising_banner_wrap").hover(function(){
			clearInterval(timerr)
		},function(){
			timerr=setInterval(logmove,2000)
		})
		$(".advertising_banner_pre").click(function(){
			logmove();
		})
		
		$(".advertising_banner_next").click(function(){
			log--;
			if(log<0){
				log=1;
			}
			$('.advertising_banner_wrap>div').eq(log).css("z-index",1).siblings().css("z-index",0)
				$(".advertising_banner_left ul>li").eq(log).css("background","white").siblings().css("background","#ccc")
		})
		$(".advertising_banner_left ul>li").click(function(){
			log=$(this).index();
//			console.log(log)
			$('.advertising_banner_wrap>div').eq(log).css("z-index",1).siblings().css("z-index",0)
				$(".advertising_banner_left ul>li").eq(log).css("background","white").siblings().css("background","#ccc")
		})
		//3
		$(".advertising_cotent_head>ul>li").click(function(){
			var indexs=$(this).index();
			$(".advertising_banner_right>ul").eq(indexs).css("z-index",1).siblings().css("z-index",-4)
		})
		//加载数据
		aa("skin",0)
		aa("makeup",1)
		aa("frag",2)
		aa("tools",3)
		aa("man",4)
		aa("body",5)
		aa("hair",6)
		function aa(louc,x){
		$.ajax({
		type:"get",
		url:"homepage.json",
		async:true,
		success:function(res){
//			console.log(res);
//			var proarr=res.skin;
			var proarr=res[louc];
//			console.log(proarr);
			
			var str="";
			var strimg="";
			$.each(proarr, function(index,ele) {
				if(index==0){
					strimg='<img src="'+ele.imgsrc+'"/>'
				}else{
					str+='<li pid="'+ele.pid+'">'
							+'<div class="brand"style="font-weight: bold;">'+ele.brand+'</div>'
							+'<div class="commodity">'+ele.name+'</div>'
							+'<div class="price" style="color: red;">'+ele.price+'</div>'
							+'<div class="skin_small_pic_img"><img src="'+ele.imgsrc+'"/></div>'
						+'</li>'
				}
			});
			$('.skin_big_pic_left:eq('+x+')').html(strimg)
			
			$(".skin_big_pic_left:eq("+x+")").html(strimg)
			$(".skin_small_pic:eq("+x+")>ul").html(str);
			//每个商品点击事件 跳转商品详情页
			$(".skin_small_pic>ul>li").click(function(){
				window.location.href="detail.html?pid="+$(this).attr("pid");
			})
		}
	})
}		


//		楼层
		var flag = true;
		$(window).scroll(function(){
			if($(window).scrollTop()>700){
				$(".floor").show()
			}else{
				$(".floor").hide()
			}
			if($(window).scrollTop()>1000){
				$(".stick").show()
			}else{
				$(".stick").hide()
			}
		})
		$(".floor div").click(function(){
			 flag=false;
			 $(this).find("span")
        	.addClass("color")
	   	 	.end()
       	 	.siblings()
        	.find("span")
        	.removeClass("color");
        	
        	  //获取当前楼号对应楼层的 top值
		    var sTop = $(".category").eq($(this).index()).offset().top;
		
		    //将页面滚走的距离设置为  sTop  
		    $("body,html").animate({
		        "scrollTop": sTop
		    }, 1000, function() {
		        flag = true;
		    });
		})
		
				//3、 滚动条滚动 --  找到当前楼层的索引    控制楼层号
				
				document.onscroll=function(){
					//循环所有的楼层 跟页面滚动距离比较
				var ff=document.querySelectorAll(".category")
				var btns=document.querySelectorAll(".floor>div")
			var otop=document.documentElement.scrollTop||document.body.scrollTop;
		var arr=['#FF0034','#FF0034','#FF7897','#FF3534','#FF2343','#FF8989','#FF5667','#FF3355',];
			
				
				
//				console.log(ff,btns)
		for(var j=0;j<ff.length;j++){
			var offT=ff[j].offsetTop-238;
			//当页面滚动距离大于楼层距离--找到当前楼层下标
			if(otop>offT){
				for(var k=0;k<btns.length;k++){
//					btns[k].style.background="#ccc";
//					btns[k].removeAttribute("color")
					btns[k].firstChild.className=""
				}
				num=j;
				//把当前下标按钮的颜色设置数组中的颜色
					btns[num].firstChild.className="color"
			}
		}
		
					
					
					
					
					
					
				}
		
			
	})
