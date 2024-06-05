//Este archivo esta creado especificamente para ampliar las sesiones de practica de todo lo que he visto hasta el momento durante el curso. 
//Buscaré ejercicios en la web donde me ponga a prueba y amplie mi logica, para mejorar mi codigo y asi poco a poco construir lineas más complejas.

/* ----------------------------- Variables ----------------------------- */
//Ejercicio 1
//Declara una variable llamada nombre en tu consola y asignale tu nombre.
let miNombre = "Jose  Samuel";
//Declara una variable llamada apellido y asignale como valor tu apellido.
let miapellido;
miapellido = "Castro  Ospina";
//Muestra por consola las variables nombre y apellido.
let nombreCompleto = miNombre   +   miapellido;
console.log(nombreCompleto);

//Ejercicio 2
/*let nombre = prompt("Por favor ingresa tu nombre");

let apellido = prompt("Por favor ingresa tu apellido");

alert("Bienvenido a esta pagina web: " + " "+ nombre + " "+ apellido );
*/


//Ejercicio 3
/*let numero1 =  Number(prompt("Por favor ingresa un número"));

let numero2 = Number(prompt("Por favor ingresa otro número"));

let result = numero1 + numero2;

alert("El resultado es: " result);
*/

//Ejercicio 4: Solicitar edad al usuario
/*let age = Number (prompt("Ingresa tu edad si eres amable"));
alert ("Tienes " + age +   " años.");
alert("Muchas gracias por tu respuesta :)");
*/

//Ejercicio 5: variables númericas
//Forma convencional de declarar y a la vez asignar un valor
let numeroEntero = 1625;
// de esta forma se asigna un valor cuando ya la variable esta guardada y lista para ser usada durante todo el codigo numeroEntero = 1625;

numeroEntero = 375; //se le cambia el valor a numeroEntero asi ya este asignado un valor predeterminado.
console.log("El valor del número entero es... " + numeroEntero);
console.log(numeroEntero + 125);

//Ejercicio 6: variables con texto
let palabrasTexto = "Casa";
//palabrasTexto = "Casa";
console.log(palabrasTexto);

let palabrasTextoLargo;
palabrasTextoLargo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu odio est. Nullam blandit nisi ligula, ac iaculis nunc faucibus nec. Aliquam malesuada quam ex, nec porta lectus consectetur non. Nullam et ullamcorper mauris. Phasellus elementum aliquam lectus nec sodales. Fusce placerat risus ut leo posuere venenatis. Nunc felis mauris, rhoncus non lectus in, tristique tempor mi.";
console.log(palabrasTextoLargo);

/* --------------------------------- String --------------------------------- */
console.log("Mi nombre es Alfredo".indexOf("nombre es"));
console.log("Me lamo Kendrick"[0]);
console.log("Me lamo Kendrick"[1]);
console.log("Me lamo Kendrick"[3]);
console.log("Me lamo Kendrick"[4]);
console.log("Me lamo Kendrick"[0]);

/* -------------------------------- funciones ------------------------------- */
//Función para llamar mi nombre

function miNombreCompleto(nombre, apellido){
    console.log("Mi nombre completo es: " + nombre  +  apellido);
}
miNombreCompleto("Jose", "Ospina");
miNombreCompleto("Samuel", "Castro");

//Función para calcular el promedio de edad en mi casa

function promedioCasa (age1, age2, age3, age4, age5, age6){
    console.log((age1+ age2 + age3 + age4 + age5 + age6) /6)
}
promedioCasa(67 , 53 , 31 , 28 , 25 , 19);