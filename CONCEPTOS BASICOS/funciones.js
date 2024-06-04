/* ------------------------------- Concepto ------------------------------- */
//Entrada de valores (inputs) y arrojara un resultado que sera la salidad de esos datos (otputs)

/* ---------------------------- La forma antigua ---------------------------- */
let num1 = 5;
let num2 = 3;
let promedio = (num1 + num2) / 2;
console.log(promedio);

/* --------------------------- Definir una funcion -------------------------- */
function promedioECCI (nota1, nota2, nota3){
    console.log ((nota1 * 0.2 + nota2 * 0.3 + nota3 *0.5) /3);
}
//invocación de una función
promedioECCI(4.67 ,4.5 ,2.5);

/* ------------------------- Parametros y argumentos ------------------------ */
"Los parámetros son variables separadas por comas especificadas como parte de una declaración de la función"
//console.log(parámetro1 + parámetro2) son los datos para "encender" la función

"Los argumentos son valores que se pasan a la función cuándo se invoca"
//agregar (1,2) = 3 los argumentos son los valores definidos al invocar la función


/* ----------------------- Ejercicios sobre funciones ----------------------- */
//1.
function saludar (nombre){
    console.log("Adios" + " "+ nombre);
}
saludar("Jose");//al momento de invocar una función tener mucho cuidado al momento de realizar este paso, ya que si se ubica dentro de las llaves no arrojara nada (eso me paso en un principio) siempre se realizara POR FUERA DE LAS LLAVES llamando a la función y pasandole su argumento (el valor a imprimir).

//2.
function sumarCinco (num){
    console.log(num +5);
}
sumarCinco(4); //al momento de invocar una función tener mucho cuidado al momento de realizar este paso, ya que si se ubica dentro de las llaves no arrojara nada (eso me paso en un principio) siempre se realizara POR FUERA DE LAS LLAVES llamando a la función y pasandole su argumento (el valor a imprimir).


//3.
function promedioDosNumeros (n1 , n2){
    console.log((n1 + n2 ) /2);
}
promedioDosNumeros(5,7);//al momento de invocar una función tener mucho cuidado al momento de realizar este paso, ya que si se ubica dentro de las llaves no arrojara nada (eso me paso en un principio) siempre se realizara POR FUERA DE LAS LLAVES llamando a la función y pasandole su argumento (el valor a imprimir).
promedioDosNumeros(4,2);