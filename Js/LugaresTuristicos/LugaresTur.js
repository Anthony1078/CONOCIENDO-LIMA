var baner=new Array("Lima0.jpg", "Lima1.jpg", "Lima2.jpg", "Lima3.jpg", "Lima4.jpg");
var colores=new Array("#D50000","#C8BF00","#C88600","#5B8500","#870000","#00851C","#000A87","#00675C");
var c=0;
var m=0;

function carrusel(){
	//Obtenemos la base(Ancho) y la altura(Alto)
	var b=screen.width;
	var h=screen.height;
	
	$("#baner").css({"height":"h/2px","width":"b/2px","top":"h/4 px","left":"b/4 px","transition":"all 0.5s"});
	
	setTimeout("desaparecer()",1000);
}
function desaparecer(){
	$("#baner").css({"height":"0px","width":"0px","top":"0px","left":"0px","transition":"all 0.5s"});
	
	setTimeout("aparecer()",1000);
}
function aparecer(){
	c++;
	if(c>=baner.length)c=0;
	
	$("#baner").attr("src","../../img/Inicio/Lima/"+baner[c]);
	$("#baner").css({"height":"220px","width":"100%","transition":"all 0.5s"});
	
	setTimeout("carrusel()",1000);
}
function colorear(){
	m++;
	if(m>=colores.length)m=0;
	$("#primera h1").attr("style","color:"+colores[m]);
	setTimeout("colorear()",500);
}

$(document).ready(function(){
	
	carrusel();
	colorear();
	
	//Cambiamos el Incono "Usuario"
	$("#usuario")
	.on("mouseenter",function(){
		$("#usu").attr("src","../../img/Inicio/UsuarNeg.png");
	})
	.on("mouseleave",function(){
		$("#usu").attr("src","../../img/Inicio/USUARIO.png");	
	});
	
	//las imagenes de los "Ultimos recorridos" se iluminarán
	$(".conimagenes img")
	.on("mouseenter",function(){
		$(this).attr("style","filter: grayscale(0); transition: all 0.3s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","filter: grayscale(100%); transition: all 0.2s");	
	});
	
	// Le damos efectos a los <a> del Nav
	$("nav a")
	.on("mouseenter",function(){
		$(this).attr("style","background-color:yellow; color:darkorange; transition: all 0.3s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","background-color:#8F8F8F; color:black; transition: all 0.2s");	
	});
	
	//Agregamos efecto a la imagen "encuesta"
	$("#encuesta")
	.on("mouseenter",function(){
		$(this).attr("style","transform:scale(1.08) ;transition: all 0.3s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","transform:scale(1.0); transition: all 0.2s");	
	});
	
	//El cursor cambiará al sobrepanerse en las imagenes "Redes"
	//Las imagenes tendran una opacidad baja al sobreponerse el cursos
	$(".redes ")
	.on("mouseenter",function(){
		$(this).attr("style","cursor:pointer;opacity:0.4;transition:all 0.5s");
	})
	.on("mouseleave",function(){
		$(this).attr("style","cursor:auto;opacity:1;transition:all 0.2s");
	})
	.on("click",function(){
	 window.location.replace = (this);	
	});
	
});