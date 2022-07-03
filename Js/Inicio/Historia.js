// JavaScript Document
$(document).ready(function(){
   $("#banerHist").cycle({
		fx:    'curtainY', 
    	sync:  false, 
    	delay: -500 
	});
    $(".Video").click(function(){
		$(this).find($(".clk")).eq(0).attr("style","height:0px; transition: all 0.5s").end();
		$(this).find($(".vid")).get(0).play();	
	});
	
	$("#Maps")
	.on("mouseenter",function(){
		$(this).attr("style","transform:scale(1.03) ;cursor:pointer;transition: all 0.3s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","transform:scale(1.0);cursor:auto; transition: all 0.2s");	
	});
	
});