class Producto{

    constructor(nombre, precio, disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

leerProducto(){
    return ´´el producto${this.nombre} tiene un precio de:${this.precio}';
}

    //instancia del objeto producto 
    const Producto1 = new Producto("TV LG ,69 pulgadas", "2.500000", disponible, true);
    const Producto2 = new Producto("Celular Samsung s8", "1.000000", disponible, false);
    const Producto3 = new Producto("Airfryer Haced cap 45kg", "500000", disponible, true);
    const Producto4 = new Producto("TV Panasoni 50 pulgadas", "1.500000", disponible, false);

console.log(producto1.leerProducto());
console.log(producto2.leerProducto());
console.log(producto3.leerProducto());
console.log(producto4.leerProducto());











//Destruc
const libroq = new libro("cuthulo",4571,true,"dfasd5456");
console.log('-----------');
console.log(nombre, precio, disponible, codigo);