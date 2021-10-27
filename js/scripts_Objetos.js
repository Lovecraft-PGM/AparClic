// obejtos //



// objeto literal //
const persona = {
    nombre: "Santiago",
    apellido:"Herrera Fernández",
    edad: 18,
     telefono: [
         {personal:3222564470},
         {fijo:4886378},
     ],
     estadoCivil: false,
     auxTransp: null 
};
console.log(persona);

var edad = persona.edad;

if(edad<=25){
console.log( "si tiene derecho al auxilio de estudio");
}else{
    console.log("No tiene derecho al auxilio de estudio ");
}

// objeto constructor//
function Producto(nombre, precio, disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
//instancia del objeto producto 
const Producto1 = new Producto("TV LG ,69 pulgadas","2.500000", disponible, true);
const Producto2 = new Producto("Celular Samsung s8", "1.000000", disponible, false);
const Producto3 = new Producto("Airfryer Haced cap 45kg", "500000", disponible, true);
const Producto4 = new Producto("TV Panasoni 50 pulgadas", "1.500000", disponible, false);

console.log(producto1.leerProducto());
console.log(producto2.leerProducto());
console.log(producto3.leerProducto());
console.log(producto4.leerProducto());
