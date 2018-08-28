$(function(){
	$("#footer").load("foot.html")
	$("[type=button]").click(function(){
				
				var userval=$("#phoneNumber").val();
				var passval=$("#pass").val();
				
				var cookieuser=getCookie("username");
				var cookiepass=getCookie("pass");
				
				if(userval!=cookieuser){
					alert("用户名不存在")
				}else if(passval!=cookiepass){
					alert("密码错误")
				}else{
					alert("登录成功");
					window.location.href="homepage.html";
				}
		})
	$("ul li:eq(1)").click(function(){
		window.location.href="Registration.html";
	})
})