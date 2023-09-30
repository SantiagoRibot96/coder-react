/* 
SUGAR SYNTAX

Es la utilizacion de operadores avanzados con la idea de simplificar el codigo.

1) Backsticks:
    `sadas ${variable} sda`

2) Operador ternario:
    condicion
        ? codigoVerdadero
        : codigoFalso;

3) Spread: (...)
    Envia cada elemento de un array u objeto y los envia de forma individual a la funcion. Ver ejemplos mas abajo

4) Desestructuracion de objetos:
    Es una expresion que permite desempaquetar valores de arrays u objetos en distintas variables. Ver ejemplos mas abajo

5) Acceso condicional a propiedades de un objeto:
    Se le pone un signo de pregunta al lado del objeto. Si es null, la aplicacion al menos no se rompe.

6) Funciones de orden superior:
    Es una funcion que recibe como parametro otra funcion, o bien devuelve una funcion. Ver ejemplos
*/

/* EJEMPLO 1 SPREAD*/
// const nombres = ["juan", "pedro", "maria", "jose"];

// console.log(nombres);

// console.log(...nombres);

// const alumno = {
//     nombre: "coki",
//     apellido: "Argento",
//     edad: 37
// };

/* EJEMPLO 2 SPREAD*/
// // const alumno2 = alumno; //Recordar que al hacer esto estoy apuntando ambos al mismo espacio de memoria

// const alumno2 = {...alumno}; //De esta forma me lo puedo traer como una copia

// alumno2.edad = 34;

// console.log(alumno);
// console.log(alumno2);

/* EJEMPLO 3 SPREAD*/
// const a = [1, 2, 3];
// const b = [4, 5, 6];

// const c = [...a, ...b];
// console.log(c);

/* EJEMPLO 4 DESESTRUCTURACION */
// const bart = {
//     nombre: "Bart",
//     apellido: "Simpson",
//     edad: "10",
//     escuela: "Sprigfield Elementary School"
// };

// let {nombre, apellido, edad, escuela} = bart;

// console.log(nombre);
// nombre = "Homero";
// console.log(nombre);
// console.log(bart.nombre);

/* EJEMPLO 5 DESESTRUCTURACION */
// let frutas = ["Manzana", "Pera", "Naranja", "Vino"];

// let [fruta0, fruta1, fruta2, fruta3] = frutas;

// console.log(fruta1);

/* EJEMPLO 6 ACCESO CONDICIONAL */
// const empleado = {
//     nombre: "Moni",
//     apellido: "Argento"
// };

// const empleado2 = null;

// console.log(empleado.nombre);
// // console.log(empleado2.nombre);//el problema es que si el objeto empleado fuera NULL, la aplicacion lanza error y frena.
// console.log(empleado2?.nombre);

/* EJEMPLO 7 FUNCIONES DE ORDEN SUPERIOR */
//filter, find, some, map

// class Producto {
//     constructor(nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// };

// const fideos = new Producto("fideos", 100);
// const harina = new Producto("harina", 250);
// const gaseosa = new Producto("cocacola", 180);
// const gaseosa2 = new Producto("cocacola", 300);
// const pan = new Producto("pan", 120);

// const arrayProductos = [fideos, harina, gaseosa, pan, gaseosa2];
// console.log(arrayProductos);

/* FIND: Busca un elemento en el array y retorna el PRIMERO que cumpla con la condicion */

// let buscado = arrayProductos.find(item => item.nombre === "cocacola");
// console.log(buscado);

// buscado = arrayProductos.find(item => item.nombre === "sprite");
// console.log(buscado);

/* FILTER: Recibe una funcion comparadora, y retorna un nuevo array con los elementos que cumplan con la condicion */

// const arrayProductosMenos200 = arrayProductos.filter(item => item.precio < 200);
// console.log(arrayProductosMenos200);

/* SOME: retorna un booleado (si existe true, si no false) */

// let hayFideos = arrayProductos.some(item => item.nombre = "fideos");
// console.log(hayFideos);

/* MAP: permite crear un nuevo array con todos los elementos del original pero transformados*/

// const arrayProductosConIva = arrayProductos.map(item => {
//     return {
//         nombre: item.nombre,
//         precio: item.precio * 1.21
//     }
// });

// console.log(arrayProductosConIva);