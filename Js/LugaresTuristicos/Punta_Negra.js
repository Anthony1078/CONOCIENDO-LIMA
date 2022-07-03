// JavaScript Document
$(document).ready(function(){
   $("#banerHist").cycle({
		fx:'cover',
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
		window.open('https://www.google.com/maps/place/Punta+Negra/@-12.3120856,-76.7880539,24505m/data=!3m1!1e3!4m5!3m4!1s0x910598c18e67f633:0xdf82634e6fa234fd!8m2!3d-12.3648751!4d-76.7945468', '_blank');
	});
	$(".cam").attr("style","-webkit-filter: brightness(10%);-moz-filter: brightness(10%);transition:all 1s");
	$(".cam")
	.on("mouseenter",function(){
		$(this).attr("style","-webkit-filter: brightness(100%);-moz-filter: brightness(100%);transition:all 1s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","-webkit-filter: brightness(10%);-moz-filter: brightness(10%);transition:all 1s");
	});
});