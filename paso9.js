/**
 * Clase 30/09
 * Objetos: conjunto de datos = clave y valor



let carro1 = { //Puede ser variable let o constante contants//
    marca: "Nissan",
    modelo: "March",
    color: "negro",
    modelo: "2015",
    acelerar(){
        return('El carro 2 acelera rápidamente'); // Se asume la palabra reservada function pero solo se pone la función (Comentario1)
    }
}

let carro2 = { 
    marca: "Renault",
    modelo: "Logan",
    color: "Gris",
    modelo: "2022",
}

console.log('Datos carro 1', carro1); //Imprimimos todo el objeto
console.log('Datos carro 2', carro2);

console.log(`La marca del vehículo 1 es: ${carro1.marca} `); //Imprime solo un valor del objeto
console.log(`La color del vehículo 2 es: ${carro2.color} `); 

carro1.color = "rojo"; //Cambiar datos específicos de objeto
carro2.modelo = "2025";

console.log(carro1.acelerar()); //Respuesta comentario 1

*/

/**
 * A partir de 2015 se realiza de otra forma la programación orientada a objetos.
 * Siempre que vea POO o OOP es programación orientada a objetos.
 * Buscar información UML - Diagrama de clases
 * Clases: plantillas para crear objetos. La palabra reservada es class.
 * Objetos: es un elemento particular. El nombre se la doy yo.
 */

// Primero defino la clase

class Persona{

    constructor(nombre, edad){ //Palabra reservada "constructor" para crear la clase

        this._nombre = nombre;
        this._edad = edad;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = this.nombre
    }

    saludar(){
    console.log(`Me llamo ${this._nombre} y tengo ${this._edad} años.`);
    }
}

const p1 = new Persona ("Julián", 39);
const p2 = new Persona ("Luciana", 9);
const p3 = new Persona ("Guadalupe", 14);

p1.saludar();
p2.saludar();
p3.saludar();

