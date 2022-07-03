// JavaScript Document
$(document).ready(function(){
   $("#banerHist").cycle({
		fx:'blindY',
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
		window.open('https://www.google.com/maps/place/Islas+Palomino/@-12.1298209,-77.2370668,1533m/data=!3m1!1e3!4m5!3m4!1s0x9104357a12d3581d:0x394bcaa8a68ea0ab!8m2!3d-12.129444!4d-77.233333', '_blank');
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