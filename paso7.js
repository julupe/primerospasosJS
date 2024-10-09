/**
 * Funciones JS: bloques de código reutilizables
 * Componentes:
 * 1. Nombre: como se llama la función - el nombre de la función es camelCase
 * 2. Parámetros: valores de entrada
 * 3. Cuerpo: bloque de código que se ejecuta
 * 4. Retorno: (opcional) valor devuelto
 * 
 
 * 
 * Sintaxis:
 * 
 * function nombrefunction(){ 
 *  código
 * }
 * 
 * 
 * function nombrefunction(parámetro 1, parámetro 2, parámetro 3){
 *  código
 * }
*/

//Ejemplo 1

saludar("Julián");

function saludar(nombre) {
    alert(`Hola ${nombre}`);
}
//Ejemplo 2

function raiz(numero) {
    return Math.sqrt(numero);
}
console.log(raiz(80));

//Ejemplo 3

function exponente(base, cuadrado){
    return Math.pow(base, cuadrado);
    }
    console.log(`El resultado es ${exponente(12, 6)}`);


//Ejemplo 4

