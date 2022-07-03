// JavaScript Document
$(document).ready(function(){
   $(".indice ")
	.on("mouseenter",function(){
		$(this).attr("style","cursor:pointer;transition:all 0.5s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","cursor:auto;transition:all 0.2s");
	})
	.on("click",function(){
		window.location.replace = (this);
	});
	
	$(".flecha ")
	.on("mouseenter",function(){
		$(this).attr("src","../img/FlechaIz.png");
	})
	.on("mouseleave",function(){
		$(this).attr("src",$(this).data("age"));
	});
	
});