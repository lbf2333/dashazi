$(function(){
			$("#header").load("header.html",function(){
				$(".table_content").css("z-index","-5")
				$(".table_content").css("display","none")
			})
			$("#footer").load("foot.html",function(){
				
			})
//			导航下划线
			$(".essential_nav>ul>li").click(function(){
				$(this).addClass("active").siblings().removeClass("active")
			})
//			吸顶导航	
			$(window).scroll(function(){
				if($(window).scrollTop()>400){
					$(".essential_nav").addClass("fixed")
				}else{
					$(".essential_nav").removeClass("fixed")
				}
			})
			//加载数据
			function GetQueryString(name) { 
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i"); 
				var r = window.location.search.substr(1).match(reg); 
				if (r!=null) return (r[2]); return null; 
			}
			//获取商品id  同过商品id发送ajax--请求商品详情数据
			var pid=GetQueryString("pid");
			console.log(pid)
			$.ajax({
				url:"mydetail.json",
				type:"get",
				async:false,
				success:function(res){
					var darr=res.detail;
					console.log(darr)
					var str="";
					var name="";
					var yuan="";
					$.each(darr,function(index,ele){
						if(ele.pid==pid){
							var aa=''
							var bb=''
							$.each(ele.smallsrc,function(indexs,eles){
							   aa+='<div class="btn"><img src="'+eles+'"/></div>'
							   bb='<img style="display: block;" src="'+eles+'"/>'
							})
							console.log($(".btn"))	
							price='<p class="one">价格</p>'
						+'<p class="two">'+ele.price+'</p>'
						+'<div><img src="img/OM.png"/></div>'
						+'<div><img src="img/N4.png"/></div>'
							name='<h1>'+ele.name+'</h1>'
							+'<p class="cname">'+ele.des+'</p>'
							+'<p>价值：776，优惠折扣：25%。补水舒缓 褪暗提亮</p>'
							console.log(name)
							str='<div id="small" pid='+pid+'>'
							+bb
//						+'<img style="display: block;" src="'+eles+'"/>'
//						+'<img src="'+ele.smallsrc[1]+'"/>'
//						+'<img src="'+ele.smallsrc[2]+'"/>'
						+'<div id="mask"></div>'
					+'</div>'
					+'<div id="big">'
					    +bb
//						+'<img style="display: block;" src="'+eles+'"/>'
//						+'<img src="'+ele.bigsrc[1]+'"/>'
//						+'<img src="'+ele.bigsrc[2]+'"/>'
						+'</div>'
						+'<div class="controlModule">'
							+'<div class="pre"><</div>'
							+aa
							//+'<div class="btn"><img src="'+eles+'"/></div>'
//							+'<div class="btn"><img src="'+ele.btnsrc[1]+'"/></div>'
//							+'<div class="btn"><img src="'+ele.btnsrc[2]+'"/></div>'
//							+'<div class="btn"></div>'
//							+'<div class="btn"></div>'
							+'<div class="next">></div>'
						+'</div>'
						
						}
						
					})
						$(".magnifier_box").html(str)
						$(".title_jie").html(name)
						$(".price").html(price)
				}
			})
			
				$("#small").hover(function(){
				$("#mask").show();
				$("#big").show();
			},function(){
				$("#mask").hide();
				$("#big").hide();
			})
			
			$("#small").mousemove(function(e){
				var e=e||window.event;
				var x=e.pageX-$("#small").offset().left-$("#mask").width()/2;
				var y=e.pageY-$("#small").offset().top-$("#mask").height()/2;
				//限制移动范围
				x=x<0?0:x;
				y=y<0?0:y;
				var maxX=$("#small").width()-$("#mask").width();
				var maxY=$("#small").height()-$("#mask").height();
				x=x>maxX?maxX:x
				y=y>maxY?maxY:y
				$("#mask").css({top:y,left:x});
				//算出大图和小盒子的比例
				var bilx=$("#big img").width()/$("#small").width();
				var bily=$("#big img").height()/$("#small").height();
				//设置大盒子的滚动 距离是遮罩层*比列
				$("#big").scrollTop(bily*y)
				$("#big").scrollLeft(bilx*x)
			})
//			按钮控制放大图片
			$(".btn").click(function(){
				var x=$(this).index(".controlModule .btn")
				console.log(x)
				$("#small img").eq(x).css("display","block").siblings("img").css("display","none")
				$("#big img").eq(x).css("display","block").siblings("").css("display","none")
			})
			$('.add').click(function(){
				var num=document.getElementsByClassName('num1')[0]
				var val=Number(num.value)
				num.value=val+1
			})
			$('.jian').click(function(){
				var num=document.getElementsByClassName('num1')[0]
				var val=Number(num.value)
				if(val<=1){
					num.value=1
				}else{
					num.value=val-1
				}
				
			})
//			$('.shopping_cart').click(function(){
//				window.location.href='Shopping cart page.html'
//				var pid=window.location.href.split('?pid=')[1]
//				var num=document.getElementsByClassName('num1')[0]
//				var val3='val'+pid
//				var val1=localStorage.getItem(val3)
//				 if(val1=null||val1==undefined){
//				 	alert(1)
//				 	var val=Number(num.value)
//				 	localStorage.setItem('pid'+pid,pid)
//			        localStorage.setItem('val'+pid,pid+','+val)
//				 }else{
//				 	alert(2)
//				 	console.log(val1)
//				 	var val2=val1.split(',')[1]
//				 	console.log(val2)
//				 	var val=Number(num.value)+Number(val2)
//					console.log(val)
//				    localStorage.setItem('pid'+pid,pid)
//				    localStorage.setItem('val'+pid,pid+','+val)
//				    
//				 }
//				
//			})
			//购物车
			//querySelector----获取单个元素---第一个
			//querySelectorAll---查找元素--参数---css选择器--所有
			var ccount=document.querySelector(".num input").value;
			console.log(ccount)
			var count=parseInt(ccount)
			var btns=document.querySelector(".shopping_cart");
					//把上次的cookie拿出
							var cookies=getCookie("datas");	
							//如果没拿到cookie--第一次添加cookie
							if(cookies==undefined){
								//设置cookie=datas=[];
								setCookie("datas","[]",50);
								cookies=getCookie("datas");
							}
						//获取到的cooKie是字符串--转成数组
						var cookiesarr=JSON.parse(cookies);
						
						count=getTotal();	
//					for(var i=0;i<btns.length;i++){
						//按钮点击事件
						btns.onclick=function(){
							
							//获取要添加到cookie的信息
							var cname=document.querySelector(".title_jie h1").innerHTML
							var ccount=document.querySelector(".num input").value;
							var count=Number(ccount)
							
							var ename=document.querySelector(".title_jie .cname").innerHTML;

							var imgSrc=document.querySelector("#small img").src;
							
							var prices=document.querySelector(".price .two").innerHTML;
							
							var price=parseInt(prices)
							console.log(price)
							var pid=window.location.href.split('?pid=')[1]
							
							//---判断是否存在商品
							if(checkishas(pid)){
								//把该商品的count+1
								updateNum(pid,count);
								console.log(cookiesarr)
							}else{
									//存储到obj对象中
								var obj={
									pid:pid,
									imgSrc:imgSrc,
									cname:cname,
									price:price,
									ename:ename,
									pcount:count,
								}
								//设置cooKie--从新获取cookie
								var cookies=getCookie("datas");	
								var cookiesarr=JSON.parse(cookies);
							//像数组中添加本次的商品信息的obj
								cookiesarr.push(obj);
								
							//把数组转回字符串
								var cookiesarrstr=JSON.stringify(cookiesarr);
						//添加到cookie中
								setCookie("datas",cookiesarrstr,50);
								//点击完成从新获取总数
							
								
							}
								count=getTotal();
								window.location.href='Shopping cart page.html'
								
						}
//			购物车结束
		})