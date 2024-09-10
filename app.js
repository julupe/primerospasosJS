/**
 * la declaración console.log no se ve en nla página pero sí en la consola F12
 */

/** console.log("Hola mundo")

//variables

let numero1 = 30;
let numero2 = 60;

suma = numero1 + numero2
resta = numero1 - numero2
multiplicacion = numero1 * numero2
division = numero1 / numero2

//para imprimir se utiliza console.log

console.log(numero1)
console.log(numero2)

//Concatenamos con un +

console.log("El resultado de: " + numero1)

//Para escribir constantes



//Para escribir booleano



//concatenar con "literal template"
//Las comillas invertidas es alt+96

console.log(`El resultado de la suma entre ${numero1} y ${numero2} es ${suma}`)
console.log(`El resultado de la resta entre ${numero1} y ${numero2} es ${resta}`)
console.log(`El resultado de la multiplicacion entre ${numero1} y ${numero2} es ${multiplicacion}`)
console.log(`El resultado de la division entre ${numero1} y ${numero2} es ${division}`)


/**
 * Clase 10/09/2024
 * Vamos a trabajar con variables 'let'
 * Para ingresar números enteros se utiliza la palabra reservada 'parseInt'
 * Si quiero decimales debo utilizar parseFloat'
 */

//let nu1 = parseInt(prompt("Ingrese el primer valor"));
//let nu2 = prompt("Ingrese el segundo valor");

//console.log(`El primer valor es:  ${nu1} y el segundo valor es ${nu2}`)


/**
 * Crear números aleatorios
 * Para este ejercicio voy a hacerlo entre 1 y 8
 * Para que no me entregue decimales sino enteros utilizo math.floor lo que hace es redondear el número
*/

//Forma 1: Límite hasta el 8 por el +1

//let alea = Math.floor((Math.random() * 8 )) + 1;
//console.log(alea);

//Forma 2: límite hasta el 99 porque no tiene el + 1

//let alea1 = Math.floor((Math.random() * 100 ));
//console.log(alea1);



//Estructuras condicionales: if y else if 

/*let edad = 10;

if(edad <= 18){
    console.log("Es menor de edad");
}else{
    console.log("Es mayor de edad");
};
*/

//Ejercicio 2
/** 
let calificación;

calificación = parseFloat(prompt("Ingrese claficación"));

if(calificación < 3.0){
    console.log("Reprobó");
}else{
    console.log("Aprobó");
}
*/

//Ejercicio 3 : If anidado (Y = &&) (O = ||)

/**let calificacion;

calificacion = parseFloat(prompt("Ingrese claficación"));

if(calificacion < 3.0){
    console.log("Reprobó");
}else if(calificacion >3.1 && calificacion <=4.0 ){
    console.log("Aprobó");
}
else{
    console.log("El mejor estudiante");
}
*/


//Ejercicio de práctica

let edad;

edad = parseInt(prompt("Ingresa tu año de nacimiento"));
if( edad =>1883 && edad <= 1900){
    console.log("Generación perdida");
}else if(edad >1900 && edad <=1924){
    console.log("Generación grandiosa");
}
}else if(edad >1924 && edad <=1945){
    console.log("Generación silenciosa");
}
}else if(edad >1945 && edad <=1964){
    console.log("Baby Boomers");
}
}else if(edad >1964 && edad <=1980){
    console.log("Generación X");
}
}else if(edad >1980 && edad <=1996){
    console.log("Generación Y");
}
}else if(edad >1996 && edad <=2012){
    console.log("Generación Z");
}
}else(edad >2012 ){
    console.log("Generación Alpha");
}