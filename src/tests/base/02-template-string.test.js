import '@testing-library/jest-dom';
const { getSaludo } = require("../../base/02-template-string");

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar hola ${nombre}', () => {
        const nombre = 'Carlos';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    });

    // getSaludo debe de retornar Hola Carlos! Si no hay argumentos en el nommbre
    test('getSaludo debe de retornar Hola Carlos!', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');
    });
})