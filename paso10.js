class Cuenta {
    constructor() {
        this.cuentas = new Array(5); //Array para almacenar cuentas
        this.saldos = new Array(5); //Array para saldos de cuentas
    }
    // métodos set y get

    setCuenta(index, cuenta) {
        this._cuentas[index] = cuenta;
    }
    getCuenta(index) {
        return 
    }

    setSaldo(index, cuenta) {
        this._saldos[index] = saldo;
    }
    getSaldo(index) {
        return this._saldos[index];
    }

    crearCuenta(){ // como son varios valores a ingresar se utiliza un for (ciclo repetitivo)
        for(let i=0; i < this._cuentas.length; i++){

        let cuenta = prompt(`Ingresa tu número de cuenta: ${i+1}`);
        let saldo = parseFloat(prompt(`Ingresa el saldo para tu nueva cuenta: ${cuenta}`));

        this.setCuenta(i, cuenta);
        this.setSaldo(i, saldo);
    }
    consultarSaldo(){
        let cuenta = prompt(`Ingresa tu número de cuenta a consultar para conocer su saldo: `);
        let index = this.cuentas.indexOf(cuenta); // .indexOf busca el índice del valor como argumento 
        if(index !== -1){
            alert(`El saldo de la cuenta ${cuenta} es de ${this.getSaldo(index)} COP`);
        } else{
            alert("El número de cuenta digitada no existe en nuestro banco");
        }
    }
}

const cuenta = new Cuenta ();

//Menú interactivo con el usuario

let opcion;
do{
    opcion = parseInt(prompt(`*** MENÚ BANCARIO JULIBANK ***
        Opciones:
        
        1. Crear cuenta
        2. Consultar saldo
        3. Consignar
        4. Retiros
        5. Salir`))
        switch (opcion) {
            case 1:
                cuenta.crearCuenta();
                break;
            case 2:
                cuenta.consultarSaldo();
                break;
            case 3:
                
                break;
        
            default:
                alert("Opción no válida. Intenta nuevamente ingresando una opción del menú.")
                break;
        }
} while(opcion !== 3) //!== significa "que sea diferente"