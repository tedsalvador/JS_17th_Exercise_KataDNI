// script.js

class DNICalculator {
    constructor() {
        this.letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE';
    }

    calcularLetraDNI(numero) {
        if (isNaN(numero) || numero < 0 || numero > 99999999) {
            throw new Error('El dato introducido es incorrecto');
        }

        const resto = numero % 23;
        return this.letrasDNI.charAt(resto);
    }
}

export default DNICalculator;
