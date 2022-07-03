
var correos=new Array("anthony_05@hotmail.com","i202017187@cibertec.edu.pe");

const form__padre = document.getElementById('form__padre');
const form__input = document.querySelectorAll('#form__padre input');

const expresiones = {
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/
}

const campos = {
    correo: false,
    password: false
}

const validarForm = (e) => {
    switch (e.target.name) {
        case "correo":
            validarInput(expresiones.correo, e.target, 'correo');
        break;
        case "password":
            validarInput(expresiones.password, e.target, 'password');
        break;
    }
}

const validarInput = (validacion, caja, campo) => {
    if(validacion.test(caja.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('form__grupo-correcto');
        document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove('form__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('form__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-correcto');
        document.querySelector(`#grupo__${campo} .form__input-error`).classList.add('form__input-error-activo');
        campos[campo] = false;
    }
}

form__input.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
});

form__padre.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //const terminos = document.getElementById('terminos');
    if( campos.correo && campos.password ){
        form__padre.reset();
        
        //El mensaje se agrega cuando los inputs estan correctos y luego se elimina durante 5 segundos
        //document.getElementById('form__mensaje-exitoso').classList.add('form__mensaje-exitoso-activo');
        alert("Bienvenido a Conociendo Lima");
        setTimeout(() => {
            document.getElementById('form__mensaje-exitoso').classList.remove('form__mensaje-exitoso-activo');
            
            window.location.href = "Paginas/Inicio.html";

        }, 1000);
        
        document.querySelectorAll('.form__grupo-correcto').forEach((correcto) => {
			correcto.classList.remove('form__grupo-correcto');
		});
        
        document.getElementById('form__mensaje').classList.remove('form__mensaje-activo');
    } else {
        document.getElementById('form__mensaje').classList.add('form__mensaje-activo');
    }
    
});



/*
(function(){
	var formulario= document.getElementsById('form__padre'),
	    elementos= formulario.elements,
	    boton = document.getElementsByClassName('form__btn-crear');

    var validarCorreo = function(){
    	if(formulario.txtcorreo.value == ){
    		alert("Completa el correo");

    	}
    } 

    var validar = function(){
    	validarCorreo();
    } 

	 formulario.addEventListener("submit",validar);   


}());*/

