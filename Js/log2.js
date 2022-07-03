// JavaScript Document
function Fecha(){
	var f=new Date();
	var d=f.getDate();
	var m=f.getMonth()+1;
	var y=f.getFullYear();
	if(d<10){
		d="0"+f.getDate();
	}
	var h=f.getHours();
	var min=f.getMinutes();
	if(h<10){
		h="0"+f.getHours();
	}
	if(min<10){
		min="0"+f.getMinutes();
	}
	$(".hora p").text(d+"/"+m+"/"+y+" "+","+" "+h+":"+min);
	setTimeout("Fecha()",1000);	
}


$(document).ready(function(){
	Fecha();
	
	$("aside h3")
	.on("mouseenter",function(){
		$(this).attr("style","color:blue;cursor:pointer");
	})
	.on("mouseleave",function(){
		$(this).attr("style","color:black;cursor:auto");	
	})
	.on("click",function(){
		window.location.href = "formulario.html";	
	});
	
});