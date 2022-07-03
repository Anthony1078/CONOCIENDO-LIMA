// JavaScript Document
$(document).ready(function(){
   
	$(".ind")
	.on("mouseenter",function(){
		$(this).attr("src","../img/Click01.png");
	})
	.on("mouseleave",function(){
		$(this).attr("src",$(this).data("plt"));
	});
	
});