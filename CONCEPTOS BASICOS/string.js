/* ------------------------------- Incorrecto ------------------------------- */
//'Hola Mundo" se empezo con comillas simples y se cierra con dobles
//'Ho'la Mundo'

/* -------------------------------- Correcto -------------------------------- */
"'Divide y venceras' No me acuerdo quién lo dijo" //las comillas simples se utilizan para citar una frase, estas se encapsulan dentro de comillas dobles que son tomadas como caracter string.
"Somos 8.000 millones de personas en el mundo" //Pueden almacenar numeros y demas simbolos, pero estos seran tomados como letras para no nombre la cadena de caracteres string

/* ---------------- Calcular longitud de una cadena de texto ---------------- */
console.log("Hola Mundo".length); //.length es el metodo que calcula cuantas palabras tiene un cadena de texto
console.log("".length); //me va arrojar 0 porque no le asigne ningun caracter

/* ---------------------------- Indexar un string --------------------------- */
//Se utiliza para saber la posición de un caracter
console.log("Mundo"[0]);
console.log("Mundo"[1]);
console.log("Mundo"[2]);
console.log("Mundo"[3]);
console.log("Mundo"[4]);
console.log("Mundo"[5]); // sale undefinied porque en JS(y en general en todos los lenguajes de programación), se toma el primero valor de un arreglo desde el 0.

//indexOF : este metodo sirve para consultar el indice de los caracteres de un string 
console.log("Mundo".indexOf("M"));
console.log("Mundo".indexOf("u"));
console.log("Mundo".indexOf("n"));
console.log("Mundo".indexOf("d"));
console.log("Mundo".indexOf("o"));
console.log("Mundo".indexOf("z")); //no existe este caracter, con lo cual arrojara un indice negativo
console.log("Mundo".indexOf("do"));
console.log("Mundo".indexOf("dio"));

/* ----------------------- Concatenación de un string ----------------------- */
console.log("Me llamo" + "Jaime"); 
console.log("Me llamo" +" " +"Jaime"); //metodo para que queden los string unidos pero separados con un espacio, esto se realiza con el operador +
let edad = 19;
console.log("Mi edad es:",edad);

/* ----------------- Declarar y asignar variables string -------------------- */
let nombre = "Samuel";
//console.log("My name is:" + " " ,nombre);
console.log(nombre.length);
console.log(nombre[2]);
console.log(nombre.indexOf("U"));
console.log("She's boombastic");

/* -------- Metodos para convertir el string en mayuscula o minuscula ------- */
console.log("It ain't over till it's over".toUpperCase());
console.log("PerO QUE MIERDA me mandas RODRigo".toLowerCase());

/* -------------- Metodo trim para eliminar espacios en blanco -------------- */
console.log("It ain't over till it's over"   .trim());

