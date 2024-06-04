/* ---------------------------- Sintaxis general ---------------------------- */
let CARRO = "Ferrari";
console.log(CARRO);

let PRECIO = 50000000;
console.log(PRECIO);

let ACCESIBILIDAD = true;
console.log("¿Es accequible para todas las personas?",!ACCESIBILIDAD);

/* ------------------------ Declaración de variables ------------------------ */
let CURSO;
console.log(CURSO); // me arrojo UNDEFINIED porque no le asigne ningun valor

/* ------------------------- Asignación de variables ------------------------ */
let VIDEOJUEGO;
VIDEOJUEGO = "GTA V";
console.log(VIDEOJUEGO); // no hay necesidad de asignar el valor una vez se declara, se puede dejar guardada la variable y luego asignamos el valor mas tarde dentro del desarrollo del codigo.

/* ------------------------ Manipulación de variables ----------------------- */
let NUM;
NUM = 45;
console.log(NUM);
console.log((NUM / 5) /5);
console.log((NUM / 5) %5);

NUM= NUM + 50;
console.log(NUM);

let PC;
console.log(PC +5); // me arrojo NaN, que significa "Not a Number". Este error salta en la consola porque no se puede sumar un string con un número, JS no lo detectara como una operación logica y no saltara un resultado fijo sino un error. 

/* -------------------------- Atajos de asignación -------------------------- */
/*let numero = 1;
numero +=10;
numero -=10;
numero *=10;
numero /=10;
numero %=10;
*/

/* ----------------------- Ejercicios sobre variables ----------------------- */

// 1. Declarar una variable llamada "nombre" y asignarle un valor que contenga mi nombre como string
let nombre
nombre = "Samuel";

// 2. Declarar una variable llamada "apellido" y asignarle un valor que contenga mi apellido como string
let apellido = "Castro";

// 3. Declarar una variable llamada "edad"
let edad;

// 4. Imprimir en la consola estos tres valores
console.log(nombre, apellido, edad);

// 5. Asignarle a la variable edad un valor como int (número)
edad = 19;

// 6.Imprimir de nuevo estos tres valores pero con esta diferencia: 'nombre,'apellido','edad'
console.log(nombre, apellido, edad);

// Extra. Declarar una variable llamada "nombre completo" en donde le asigne como valor mi nombre y apellido unificado en mi nombre completo.
let nombreCompleto
nombreCompleto = nombre  +  apellido;
console.log(nombreCompleto);







