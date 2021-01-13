// ejemplo alert
// alert("Hola Mundo!");  //dentro de parentesis deben ir comillas y el mensaje, al final cierre con ;

/* JS tiene 6 tipos de datos básicos:
NÚMEROS, CADENAS, BOOLEANOS, OBJETOS, FUNCIONES E INDEFINIDOS */

/* VARIABLES: almacenan valores que pueden ser utilizados posteriormente.
 El valor de una variable puede cambiar (variar) durante la ejecución del programa */
// ejemplo: 
 var almacena = 9 + 10;  // el ; indica que finaliza la sentencia.
 // var es una (keyword): no pueden ser utilizadas como nombres de variable.

 console.log( almacena);  /* Para ver el resultado de evaluar algo o el contenido de una variable en
 la consola del navegador */

// TIPOS DE DATOS
// NÚMEROS (numbers): enteros, flotante.
var entero = 7;
console.log("Valor del tipo entero: " + entero);  //Concatenar: unir dos cosas diferente, como un número y "texto"
/* El resultado de utilizar el operador  +  entre una cadena y ún número = concatenar */

var flotante = 6.66;
console.log("Valor del tipo flotante: " + flotante);

// CADENAS DE TEXTO(string): van entre " "  ó  ' ' 
var caracteres = "+-*/452188okjh"
console.log("Valor del tipo string: " + caracteres);
var num_string1 = '10';
var num_string2 = '20';
console.log("Concatena: " + num_string1 + num_string2);

// BOOLEANOS(bool): Sólo pueden contener uno de dos valores, verdadero o falso(true o false) (1 o 0)
var boolfalse = false;
var booltrue = true;
console.log("valor del tipo Booleano: " + boolfalse);
console.log("valor del tipo Booleano: " + booltrue);

/* OPERADORES  - Nos permitan realizar operaciones
1- Aritmeticos
2- Unario
3- Comparación
4- Lógicos
5- Ternario */

/* OPERADORES ARITMETICOS
SUMA: +
RESTA: -
MULTIPLICACIÓN: *
DIVISIÓN: /
RESIDUO: %
*/
var numero1 = 10, numero2 =8, cadena = "101010";

console.log('OPERADORES ARITMETICOS');
console.log(numero1 + numero2); // SUMA 10 + 8
console.log(numero1 - numero2); // RESTA 10 - 8
console.log(numero1 * numero2); // MULTIPLICA 10 * 8
console.log(numero1 / numero2); // DIVIDE 10 / 8
console.log(numero1 % numero2); // RESIDUO 10 % 8

console.log(numero1 + cadena); // CADENA + NÚMERO = CONCATENA
console.log(cadena + cadena); // CADENA + CADENA = CONCATENA

/* OPERADOR UNARIO: no son simbolos, son palabras.
    typeof: Muestra una cadena con el tipo de dato que le demos */
console.log("OPERADOR UNARIO");
console.log(typeof numero1); // number
console.log(typeof cadena); // string
console.log(typeof true); // boolean
 




