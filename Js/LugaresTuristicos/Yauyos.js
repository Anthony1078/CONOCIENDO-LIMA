// JavaScript Document
$(document).ready(function(){
   $("#banerHist").cycle({
		fx:'fade',
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
		window.open('https://www.google.com/maps/place/Reserva+Paisajistica+Nor+Yauyos-Cochas/@-12.1166764,-75.8555841,766m/data=!3m2!1e3!4b1!4m5!3m4!1s0x910f1843593443bf:0x56f604dc4e0b824b!8m2!3d-12.1166817!4d-75.8533954', '_blank');
	});
	$(".cir")
	.on("mouseenter",function(){
		$(this).attr("style","transform:rotateZ(360deg);transition:all 1s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","transform:rotateZ(0deg);transition:all 1s");
	});
	$(".camb").attr("style","-webkit-filter: sepia(100%);-moz-filter: sepia(100%)");
	$(".camb")
	.on("mouseenter",function(){
		$(this).attr("style","-webkit-filter: sepia(0%);-moz-filter: sepia(0%);transition:all 1s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","-webkit-filter: sepia(100%);-moz-filter: sepia(100%);transition:all 1s");
	});
	
});