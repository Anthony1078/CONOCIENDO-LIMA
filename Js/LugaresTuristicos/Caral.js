// JavaScript Document
$(document).ready(function(){
   $("#banerHist").cycle({
		fx:'scrollUp',
		timeout:1500,
		delay:-500
	});
	$(".rest")
	.on("mouseenter",function(){
		$(this).attr("style","-webkit-filter: contrast(200%); -moz-filter: contrast(200%);transition:all 0.5s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","-webkit-filter: contrast(auto); -moz-filter: contrast(auto);transition:all 0.2s");
	});
	$(".circ")
	.on("mouseenter",function(){
		$(this).attr("style","transform:rotateX(360deg);transition:all 1s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","transform:rotateX(0deg);transition:all 1s");
	});
	
	$("#Maps")
	.on("mouseenter",function(){
		$(this).attr("style","cursor:pointer;transition:all 0.5s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","cursor:auto;transition:all 0.2s");
	})
	.on("click",function(){
		window.open('https://www.google.com/maps/place/Ciudad+Sagrada+de+Caral/@-10.8927603,-77.5213975,192m/data=!3m1!1e3!4m8!1m2!2m1!1sCiudad+sagrada+de+caral!3m4!1s0x9107179cb5db669f:0xe2cb0804c6e1f68!8m2!3d-10.8927515!4d-77.5211126', '_blank');
	});
	
});