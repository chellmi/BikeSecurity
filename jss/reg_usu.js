const formulario = document.getElementById('formulario');

const expresiones = {
    
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	contraseña: /^.{4,8}$/, // 4 a 8 digitos.
    contraseña2: /^.{4,8}$/, // 4 a 8 digitos.
    n_document: /^.{6,10}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    correo2: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    direccion: /^[a-zA-Z0-9\#\-]{4,16}$/,
	n_fijo: /^\d{10}$/, // 10 numeros.
    n_celular: /^\d{10}$/, // 10 numeros.
    ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    n_bici: /^\d{1,1000}$/

}