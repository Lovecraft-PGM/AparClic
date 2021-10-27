// console.log('Hola')
// document.write("Que mas pues desde el DOM(Document Object model");


// Así se declaran variables palabras reservadas (var, let, const)

// ES5

var nombre5 = 'Juliana';
var edad5 = 18;
nombre5 = 'Juliana Valencia'; // Digamos que juliana se caso y cambio su apellido, así que la variable nombre5 ha cambiado su valor

// ES6

// const vacio; // lanza error, una constante debe tener un valor asignado en su declaración.
const nombre6 = 'Juliana Valencia'; // Al declarar nombre6 como const, su valor no puede mutar o ser cambiado.
let edad6 = 18; // let puede mutar o ser cambiado
nombre6 = 'Juliana Valencia'// Esta vez juliana no se puede casar
// No se puede cambiar nombre6 si es const, obtenemos un error.

//En el caso de var , las variables son function-scope, mientras que const y let son block-scope :

//ES5

var x = 0; // Variable x declarada como var
functionfour5(){
    for (var i = 0; i < 5; i++) { // un for loop que va desde 0 hasta i menor a 5, osea 4
        x = i; // asignamos el valor de i a x, como vamos hasta 4, porque cuando i alcanza el valor de 5 el lopop termina, x tiene el valor 4
    }
}
four5();
console.log(x) //al imprimir x, efectivamente es 4
// La x declarada con el valor 0 y la x dentro de la funcion, son la misma x.

//ES6

let y = 0;
functionfour6(){
    for (let i = 0; i < 5; i++) {
        y = i; // Esta y no ha sido declarada si quiera, el alcance de cada variable esta sujeta a los {}, as'i que es undefined
    }
}
four6();
console.log(y); // Retorna 0, el valor declarado en un principio, la variable y no entró en lafuncion four6(), asi que son y diferentes.

