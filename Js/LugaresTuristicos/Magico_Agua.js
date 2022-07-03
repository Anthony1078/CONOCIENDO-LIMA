// JavaScript Document
$(document).ready(function(){
   $("#banerHist").cycle({
		fx:'blindZ',
		timeout:1500,
		delay:-500
	});
	$("#Maps")
	.on("mouseenter",function(){
		$(this).attr("style","cursor:pointer;transition:all 0.5s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","cursor:auto;transition:all 0.2s");
	})
	.on("click",function(){
		window.open('https://www.google.com/maps/place/Circuito+M%C3%A1gico+del+Agua/@-12.0709532,-77.0351282,383m/data=!3m1!1e3!4m5!3m4!1s0x9105c8ecd3b32ed1:0xa63ff86b9b214929!8m2!3d-12.0709585!4d-77.0340339', '_blank');
	});
	$(".cam").attr("style","-webkit-filter: sepia(100%);-moz-filter: sepia(100%)");
	$(".cam")
	.on("mouseenter",function(){
		$(this).attr("style","-webkit-filter: sepia(0%);-moz-filter: sepia(0%);transition:all 1s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","-webkit-filter: sepia(100%);-moz-filter: sepia(100%);transition:all 1s");
	});
	
});