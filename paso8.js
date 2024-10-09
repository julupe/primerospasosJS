/**
 * Clase 24 de septiembre
 * Arreglos 

let estudiantes = ["Julián", "Guadalupe", "Luciana", "Sofía", "Ana María"];
console.log(estudiantes);

// Añadir al final

console.log(estudiantes.push("Carmen"));

// Añadir al inicio

console.log(estudiantes.unshift("Manuel"));

// Añadir en cualquier posición

console.log(estudiantes.splice(4, 0, "Fabián"));

// Eliminar al final 

console.log(estudiantes.pop());

// Eliminar el primer elemento

console.log(estudiantes.shift());

// Eliminar en una posición

console.log(estudiantes.splice(2, 3)); // el 2 identifica a partir de qué posición y el 3 cuántas posiciones

// Conocer la posición de un elemento

console.log(estudiantes.indexOf("Luciana"));

// Recorrerr elementos con función 'for each'

estudiantes.forEach((i) => {
    console.log(i);
});



//Clase 25 de septiembre

let numeros = [12, 23, 45, 20];
let suma = 0;

for(let i = 0; i < numeros.lenght; i++){
    suma += numeros[i];
}
console.log(`La suma es ${suma}`);



let numeros = [12,23,18,16,19];
let suma = 0;

for(let i = 0; i < numeros.lenght; i++){
    suma += numeros[i];
}
console.log(`La suma es ${suma}`);

*/

/** 
//Ejercicio 26/09
Escribe un programa que permita al usuario ingresar las calificaciones de una clase de estudiantes.
El programa debe cumplir con los siguientes requisitos:

1. Solicitar al usuario el número de estudiantes de la clase.
2. Crear un vector que almacene las calificaciones de cada estudiante.
3. Permitir al usuario ingresar la calificación de cada estudiante.



let tamanio = parseInt(prompt("Ingrese la cantidad de estudiantes")); //Paso 1
let calificaciones = new Array(tamanio); // Paso 2

for (let i = 0; i < tamanio; i++){
    
    calificaciones[i] = parseFloat(prompt("Ingrese las notas"));
}
for (let i = 0; i < calificaciones.length; i++){
    
    console.log(`Calificación ${i+1}: ${calificaciones[i]}`);
}; 

// El siguiente ejercicio es calcular y mostrar el promedio de las calificaciones ingresadas.

*/
