$(function(){
	$("#footer").load("foot.html")
	$(".register>ul>li:eq(0)").click(function(){
		window.location.href=("login page.html")	
	})
	
	
	//验证码
	var codes="";
			//生成验证码
			function makecode(){
				 codes='';
				var arr=['a','b','c','d','d','h','p','f','A','B','C','0','8','6','1'];
				for(var i=0;i<4;i++){
					var index=Math.floor(Math.random()*arr.length);
					codes+=arr[index];
				}
				
				return codes;
				
			}
			//调用生成验证码
			var initcode=makecode();
			var codeele=document.getElementsByClassName("code")[0];
			console.log(codeele)
			codeele.innerHTML=initcode;
			//点击变换验证码
			codeele.onclick=function(){
				//调用生成验证码函数
				var  changecode=makecode();
				codeele.innerHTML=changecode;
			}
			//----判断验证码
			//取出文本输入框
			var mytext=document.getElementById("mytext_code");
			mytext.onblur=function(){
				//判断验证码是否正确
				var usercode=mytext.value;
			
				//提示框
				if(usercode==""){
					alert("请输入验证码")
						//不区分大小写
				}else if(usercode.toLowerCase()==codes.toLowerCase()){	
					
				}
			}
			
//			密码判断
			var reg1=/^\w{6}$/;
				$("#pass").blur(function(){
					
					if(!reg1.test($(this).val())){
						$(this).next().show();
					}else{
						$(this).next().hide();
					}
				})
				//俩次密码一致
				$("#rpass").blur(function(){
				
					if($(this).val()!=$("#pass").val()){
						$(this).next().show();
					}else{
						$(this).next().hide();
					}
				})
			
			
			
			//手机号验证
			//手机判断
				var  reg2=/^1[3|5|7|8]\d{9}$/;
				$("#mytext_phonenum").blur(function(){
					
					if(!reg2.test($(this).val())){
						$(this).next().css("display","block");
						
					}else{
						
						$(this).next().css("display","none");
						$(".code").css("display","block");
					}
					
				})
				//短信验证码
				//验证码
	var codes="";
			//生成验证码
			function makecode(){
				 codes='';
				var arr=['a','b','c','d','d','h','p','f','A','B','C','0','8','6','1'];
				for(var i=0;i<4;i++){
					var index=Math.floor(Math.random()*arr.length);
					codes+=arr[index];
				}
				
				return codes;
				
			}
			//调用生成验证码
			var initcode=makecode();
			var codeele1=document.getElementsByClassName("code")[1];
			console.log(codeele)
			codeele1.innerHTML=initcode;
			//点击变换验证码
			codeele.onclick=function(){
				//调用生成验证码函数
				var  changecode=makecode();
				codeele.innerHTML=changecode;
			}
			//----判断验证码
			//取出文本输入框
			var mytext=document.getElementById("shorst");
			mytext.onblur=function(){
				//判断验证码是否正确
				var usercode=mytext.value;
			
				//提示框
				if(usercode==""){
					alert("请输入验证码")
						//不区分大小写
				}else if(usercode.toLowerCase()==codes.toLowerCase()){	
					
				}
			}
			//存到cookie中
			$("#register").click(function(){
					//把数据存储到cookie
					if(reg2.test($("#mytext_phonenum").val())&&reg1.test($("#pass").val())){
						setCookie("username",$("#mytext_phonenum").val(),55);
						setCookie("pass",$("#pass").val(),55);
						alert("注册成功")
						window.location.href=("login page.html")
					}
				})
})
