const expresiones = {
	nombre_usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	contraseña: /^.{4,8}$/, // 4 a 8 digitos.
}

let contraseña;
let nombre_usuario;

function ingresar() {
    var btn = document.getElementById('ingresar');
    var contraseña = document.getElementById('contraseña');
    var nombre_usuario = document.getElementById('nombre_usuario');
    
    btn.addEventListener('click', function(evt){
        if(contraseña.value === ''){

            console.log('el campo contraseña es obligatorio');
            evt.preventDefault();
            return false;
  
        }else if(nombre_usuario.value === ''){
  
        console.log('el campo de usuario es obligatorio');
            evt.preventDefault();
            return false;
  
        }else if(nombre_usuario.value.length > 30){
  
          console.log('El nombre del usuario es demasiado largo');
            evt.preventDefault();
            return false;
  
        }
    }); 
}

