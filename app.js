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


/**Ejercicio de práctica 1

let edad = 18;

if (edad >= 50) {
    console.log("Eres genración perdida");
} else {
    console.log("Eres menor de edad");
}

*/

//Ejercicio 2: if anidado

/** 

let año = 1920

let = prompt("Cuál es tu año de nacimiento");

if( año <1900) {
    console.log("Eres generación perdida");
} else if (año > 1901 && < 1924) {
    console.log("Eres generación grandiosa");
}
} else {
    console.log("Eres generación Alpha");
}

*/
//Operador ternario: se utiliza cuando se evalúa una sola condición

//Ejericicio switch case: Conversor de dinero


let pesos = prompt("Valor en pesos a convertir");
let divisa = prompt("¿En qué moneda quieres convertir?")

switch (pesos) {
    case dolar: 
        console.log(pesos * 4280)
        break;
    case euro: 
        console.log(pesos * 4728)
        break;
    case libra: 
        console.log(pesos * 5601)
        break;
    default:
        console.log("Esta moneda no existe)
        break;
}






