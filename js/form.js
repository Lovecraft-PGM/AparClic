function validar_formulario(entrada, tipo){
    if (Number.isInteger (entrada)==flase)
    { console.log('Error:Número de documento es inválido. <br>');return false;}
    else if (entrada === null)
    { console.log('Error: Debe ingresar el Número de documento.<br> ');return false;}
    else if (entrada.length <8 || entrada.length >10)
    { console.log('Error: La longitud debe estar entre 8 y 10 digitos.<br>');return false;}

    else if (Number.isInteger(tipo) == true)
    { console.log('Error: Debe elegir un tipo de documento');return false;}
    else if (tipo != 'Cedula_de_ciudadania' || tipo != 'Cedula_de_ciudadania' || tipo != 'Contraseña' || tipo !='NIT')
    { console.log('Error: El  documento debe ser uno de los siguientes.<br>');return false;}
    else if (tipo === null)
    { console.log('Error: Por favor elija un tipo de documento.<br>');return false;}
    else { return true;}

}

function email(entrada){
    const regEX = /^ [a - zA - Z0 - 9.!#$ %& '*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig;
    const cadena = entrada;
    if (cadena === null) { console.log('Error:Debe ingresarun correo electrónico.<br> ');return false;}
    else if (regEX.test(cadena)) { console.log('El correo electrónico es válido.<br>');return true;}
    else {
        console.log('El correo electrónico es inválido. <br>');return false;}
}

function pass(entrada){
    const regEX = /^[A-Z]{1,}[a-z]{7,}[/S][0-9]{1,}[/S]/g;
    const cadena = entrada; 
    if (cadena === null) {console.log('Error: Por favor ingrese una contraseña. <br>');return false;}
    else if (regEX.test(cadena)){console.log('Contraseña válida.<br>');return true;}
    else {
        console.log('Error: Contraseña inválida. <br>');return false;}
}

module.exports.validar_formulario = validar_formulario;
module.exports.validarCorreo = email;
module.exports.validarContraseña = pass;

