//  vectores -- array
numeros = [14, 58, 45, 748, 565, 78, 54];
cadenas = ["juan", "pedro"];
objetos = [cliente = { nombre: "ivan", apellido: "castro" }, producto = { nombre: "arroz", precio: 1500 }];
arreglo = [14, 58, 45, 748, 565, 78, 78, "juan", "pedro", cliente = { nombre: "ivan", apellido: "castro" }, producto = { nombre: "arroz", precio: 1500 }];
console.log(objetos);
objetos[6] = "cadena";
console.log(objetos[6]);
console.log(objetos);
console.table(arreglo.length);



numeros = [14, 58, 45, 748, 565, 78, 54];
numeros.forEach(function (numero) {
    if (numero == 748) {
        console.log('Si esta');
        console.log(numero);
    }
});