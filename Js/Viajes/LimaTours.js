// JavaScript Document
$(document).ready(function(){
   $("#banerHist").cycle({
		fx:'zoom',
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
		window.open("https://www.limatours.com.pe/es/unidades-de-negocio/purequest-adventures", "Diseño Web", "width=400, height=600");
	});
	$(".cam").attr("style","filter: brightness(0) invert(1)");
	$(".cam")
	.on("mouseenter",function(){
		$(this).attr("style","-webkit-filter: sepia(0%);-moz-filter: sepia(0%);transition:all 2s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","filter: brightness(0) invert(1);transition:all 2s");
	});
	$(".camb")
	.on("mouseenter",function(){
		$(this).attr("style","opacity: 0.5;transition:all 1s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","opacity: 1;transition:all 1s");
	});
	
	
	
});