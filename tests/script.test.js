// script.test.js

import { describe, it, expect } from 'vitest';
import DNICalculator from './js/script.js';

describe('DNICalculator', () => {
    const dniCalculator = new DNICalculator();

    it('debería calcular la letra correcta para varios números válidos', () => {
        expect(dniCalculator.calcularLetraDNI(12345678)).toBe('Z');
        expect(dniCalculator.calcularLetraDNI(98765432)).toBe('M');
        expect(dniCalculator.calcularLetraDNI(0)).toBe('T');
        expect(dniCalculator.calcularLetraDNI(99999999)).toBe('R');
    });

    it('debería lanzar un error para números fuera del rango', () => {
        expect(() => dniCalculator.calcularLetraDNI(-1)).toThrow('El dato introducido es incorrecto');
        expect(() => dniCalculator.calcularLetraDNI(100000000)).toThrow('El dato introducido es incorrecto');
    });

    it('debería lanzar un error para datos inválidos', () => {
        expect(() => dniCalculator.calcularLetraDNI('abcdef')).toThrow('El dato introducido es incorrecto');
        expect(() => dniCalculator.calcularLetraDNI(null)).toThrow('El dato introducido es incorrecto');
        expect(() => dniCalculator.calcularLetraDNI(undefined)).toThrow('El dato introducido es incorrecto');
    });
});
