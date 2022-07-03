// JavaScript Document
$(document).ready(function(){
   $("#banerHist").cycle({
		fx:'turnRight',
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
		window.open("https://limareps.com/", "Diseño Web", "width=400, height=600");
	});
	
	$(".cmb").attr("style","-webkit-filter: hue-rotate(100deg);filter: hue-rotate(100deg);transition:all 1s");
	$(".cmb")
	.on("mouseenter",function(){
		$(this).attr("style","-webkit-filter: hue-rotate(0deg);filter: hue-rotate(0deg);transition:all 1s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","-webkit-filter: hue-rotate(100deg);filter: hue-rotate(100deg);transition:all 1s");
	});
	
	
});