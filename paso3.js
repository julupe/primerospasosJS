/**
 * Clase: 16/09/2024
 * Ciclos 'for' 
 * for (inicio, límite, incremento o decremento){
 *          console.log();
 * }
 
for (let i = 1; i <= 10; i++){
    console.log(i);
}

//Ejercicio 2

let n = parseInt(prompt("Ingresa un número entero"));
let sum = 0; //es un contador y siempre debe iniciar con el cero 

for (let i = 1; i <= n; i++){
    sum += i;
}
console.log(`La suma de los números del 1 al ${n} es ${sum}`);

//Ejercicio 3 (Tabla de multiplicar)

let tabla = parseInt(prompt("Ingresa el número a multiplicar:"));

for (let i = 0; i <= 10; i++){
    console.log(`${tabla} * ${i} = ${tabla * i}`)
}

//Ejercicio 4 (tabla de división)
let div = parseInt(prompt("Ingresa el número a dividir:"));

for (let i = 0; i <= 10; i++){
    console.log(`${div} / ${i} = ${div / i}`)
}


//Ejercicio 4: imprimir las tablas del 1 a la del 10 con for anidado *REVISAR PORQUE NO SALIÓ*

for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++){
        console.log(${i} * ${j} = ${i * j});
    }
}



// Ejercicio 5: imprimir la suma de los primeros 100 números impares

sum = 0;

for (let s = 1; s <100; s+2){
        sum += s;
}
console.log(`La suma de los primeros 100 números impares es igual a ${sum}`)

*/