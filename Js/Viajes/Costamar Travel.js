// JavaScript Document
$(document).ready(function(){
   $("#banerHist").cycle({
		fx:'scrollDown',
		timeout:1500,
		delay:-500
	});
	
	$("#Lima h3 ")
	.on("mouseenter",function(){
		$(this).attr("style","color:blue;cursor:pointer;transition:all 0.5s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","color:black;cursor:auto;transition:all 0.2s");
	})
	.on("click",function(){
		window.open("https://costamar.com.pe/", "Diseño Web", "width=400, height=600");
	});
	
	$(".cir")
	.on("mouseenter",function(){
		$(this).attr("style","transform:rotateY(360deg);transition:all 1s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","transform:rotateY(0deg);transition:all 1s");
	});
	
	$("#Maps")
	.on("mouseenter",function(){
		$(this).attr("style","cursor:pointer;opacity:0.4;transition:all 1s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","cursor:auto;opacity:1;transition:all 1s");
	});
	
	$(".cam")
	.on("mouseenter",function(){
		$(this).attr("src","../../img/Agencias/Costamar/2.jpg");
	})
	.on("mouseleave",function(){
		$(this).attr("src","../../img/Agencias/Costamar/3.jpg");
	});
	$(".reg")
	.on("mouseenter",function(){
		$(this).attr("src","../../img/Agencias/Costamar/3.jpg");
	})
	.on("mouseleave",function(){
		$(this).attr("src","../../img/Agencias/Costamar/2.jpg");
	});
	
});