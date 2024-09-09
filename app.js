/**
 * la declaración console.log no se ve en nla página pero sí en la consola F12
 */
console.log("Hola mundo")

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

//concatenar con "literal template"
//Las comillas invertidas es alt+96

console.log(`El resultado de la suma entre ${numero1} y ${numero2} es ${suma}`)
console.log(`El resultado de la resta entre ${numero1} y ${numero2} es ${resta}`)
console.log(`El resultado de la multiplicacion entre ${numero1} y ${numero2} es ${multiplicacion}`)
console.log(`El resultado de la division entre ${numero1} y ${numero2} es ${division}`)
