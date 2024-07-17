// app.js

import DNICalculator from './js/script.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();
const dniCalculator = new DNICalculator();

function pedirDNI() {
    while (true) {
        const input = prompt('Ingrese su número de DNI (entre 0 y 99999999) o escriba "cancelar" para salir: ');
        if (input.toLowerCase() === 'cancelar') {
            console.log('Operación cancelada.');
            break;
        } else {
            try {
                const numero = parseInt(input, 10);
                const letra = dniCalculator.calcularLetraDNI(numero);
                console.log(`La letra para el DNI ${numero} es: ${letra}`);
            } catch (error) {
                console.log(error.message);
            }
        }
    }
}

pedirDNI();
