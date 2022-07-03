// JavaScript Document
$(document).ready(function(){
   $("#banerHist").cycle({
		fx:'scrollLeft',
		timeout:1500,
		delay:-500
	});
	
	$(".paisaje")
	.on("mouseenter",function(){
		$(this).attr("style","filter: brightness(60%);transition:all 1s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","filter: brightness(100%);transition:all 1s");
	});
	$(".cir1")
	.on("mouseenter",function(){
		$(this).attr("style","transform:rotateY(360deg);transition:all 1s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","transform:rotateY(0deg);transition:all 1s");
	});
	
	$(".cir2")
	.on("mouseenter",function(){
		$(this).attr("style","transform:rotateY(-360deg);transition:all 1s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","transform:rotateY(0deg);transition:all 1s");
	});
	$("#Maps")
	.on("mouseenter",function(){
		$(this).attr("style","cursor:pointer;transition:all 0.5s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","cursor:auto;transition:all 0.2s");
	})
	.on("click",function(){
		window.open('https://www.google.com/maps/place/Parque+el+olivar+de+San+Isidro/@-12.102267,-77.0360522,19z/data=!4m8!1m2!2m1!1sParque+El+olivar!3m4!1s0x9105c9ef4a24b07b:0x429dff20e765a113!8m2!3d-12.0970637!4d-77.0340218', '_blank');
	});
	
});