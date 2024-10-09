// Clase 10/09/2024
// Vamos a trabajar con variables 'let'
//Para ingresar números enteros se utiliza la palabra reservada 'parseInt' y para decimales utilizar 'parseFloat'
//Condicionales: 'if', 'else if' y 'else'
//Bucles: 'for' y 'while'
//Sentencia de interrupción: 'break', interrumpe; y 'continue' salta a la siguiente iteración


//Ingreso de datos por el usuario

 let nu1 = parseInt(prompt("Ingrese el primer valor"));
 let nu2 = parseInt(prompt("Ingrese el segundo valor"));

 let sum = nu1+nu2;

 console.log(`El primer valor ingresado es ${nu1} y el segundo es ${nu2}`);
 console.log(`La suma de los valores ingresados, ${nu1} y ${nu2}, es ${sum}`);

//Números aleatorios

//Forma 1
let alea = Math.floor((Math.random() * 8) + 1);   //Biblioteca matemática. Para aleatorio el primer valor '8' es el límite y el de fuera '1' es el inicio
                                                    //Math.floor es para exigir que se impriman solo números enteros
console.log(alea);

//Forma 2
let alea1 = Math.floor((Math.random() * 50)); //Imprime entre 0 y 49
console.log(alea1);

//Estructura del 'if'

let edad = 5;

if(edad >= 18){
 console.log("Es mayor de edad");
}else{
  console.log("Es menor de edad");   
}

//Ejercicio 2

let calificacion = parseFloat(prompt("Ingrese la nota"));

if(calificacion < 3){
    console.log("Debe repetir la materia");
}else{
   console-log("Aprobó la materia");
}

//if anidados

 
let nota = parseFloat(prompt("Ingrese la nota"));

if(nota < 3){
    console.log("Debes repetir la materia");
}else if( nota < 4.5){
    console-log("Aprobaste pero sin subsidio");
}else{
    console.log("Tienes el subsidio.!Sigue así¡");
}

//if anidados con && (y) || (o)

let nota2 = parseFloat(prompt("Ingrese la nota"));

if(nota2 < 3){
    console.log("Debes repetir la materia");
}else if( nota2 > 3 && nota2 < 4.5){
    console.log("Aprobaste pero sin subsidio");
}else{
    console.log("Tienes el subsidio.!Sigue así¡");
}

//Ejercicio de las generaciones: preguntar el año de nacimiento e indicar a qué generación pertenece

let edad = parseInt(prompt("¿Cuál es tu edad?"));
let naci = 2024 - edad

if(naci >=1883 && naci <=1900){
    console.log("Generación perdida");
}else if(naci >1900 && naci <=1924){
    console.log("Generación grandiosa");
}else if(naci >1924 && naci <=1945){
    console.log("Generación silenciosa");
}else if(naci >1945 && naci <=1964){
    console.log("Generación X");
}else if(naci >1964 && naci <=1980){
    console.log("Generación Boomers");
}else if(naci >1980 && naci <=1996){
    console.log("Generación Y");
}else if(naci >1996 && naci <=2012){
    console.log("Generación Z");
}else if(naci >2012 && naci <=2025){
    console.log("Generación Alpha");
}else{
    console.log("Generción no definida");
}

//Ejercicio práctico 3


let perm = parseInt(prompt("¿Quién te dio permiso? (digita el número)\n1. Papá \n2. Mamá \n3. Ambos \n4. Ninguno "));

if (perm === 1){
    console.log("Debes hablar con mamá");
} else if(perm === 2){
    console.log("Debes hablar con papá");
} else if(perm === 3){
    console.log("Puedes ir");
} else if(perm === 4){
    console.log("¿Crees que te mandas sola?");
}else{
    console.log("Ingresa una opción válida");
}