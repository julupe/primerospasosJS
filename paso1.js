/**
 * Para declarar una variable se utiliza 'let' y 'const' para constantes.
 */

console.log("Hola mundo") //así se imprime en JS

//variables
let numero1 = 9;
let numero2 = 14;

//Operaciones matemáticas básicas

suma = numero1 + numero2
resta = numero1 - numero2
multiplicacion = numero1 * numero2
division = numero1 / numero2
modulo = numero1 % numero2 //el módulo encuentra el residuo de la división

//imprimimos

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(modulo)

//Concatenamos con un +

console.log("El resultado de: " + numero1)

//Para escribir constantes



//Para escribir booleano

let num = 10;
console.log()


//Cuando se utiliza literal template ${} es para imprimir lo que contiene la variable 
//Las comillas invertidas es alt+96

console.log(`El resultado de la suma entre ${numero1} y ${numero2} es ${suma}`)
console.log(`El resultado de la resta entre ${numero1} y ${numero2} es ${resta}`)
console.log(`El resultado de la multiplicacion entre ${numero1} y ${numero2} es ${multiplicacion}`)
console.log(`El resultado de la division entre ${numero1} y ${numero2} es ${division}`)
console.log(`El residuo de la division entre ${numero1} y ${numero2} es ${modulo}`)