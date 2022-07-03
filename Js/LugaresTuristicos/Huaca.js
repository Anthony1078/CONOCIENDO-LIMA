// JavaScript Document
$(document).ready(function(){
   $("#banerHist").cycle({
		fx:'blindX',
		timeout:1500,
		delay:-500
	});
	$(".imag").attr("style","-webkit-filter: blur(10px);-moz-filter: blur(10px)");
	$(".imag")
	.on("mouseenter",function(){
		$(this).attr("style","-webkit-filter: blur(0);-moz-filter: blur(0);transition:all 0.5s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","-webkit-filter: blur(10px);-moz-filter: blur(10px);transition:all 0.2s");
	});
	
	$("#Maps")
	.on("mouseenter",function(){
		$(this).attr("style","cursor:pointer;transition:all 0.5s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","cursor:auto;transition:all 0.2s");
	})
	.on("click",function(){
		window.open('https://www.google.com/maps/place/Museo+de+Sitio+Huaca+Pucllana/@-12.1111748,-77.0355562,766m/data=!3m2!1e3!4b1!4m5!3m4!1s0x9105c83e28585565:0x4ad752e285ae0442!8m2!3d-12.1111801!4d-77.0333675', '_blank');
	});
	
});