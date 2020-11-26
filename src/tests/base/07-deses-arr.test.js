import '@testing-library/jest-dom';
const { retornaArreglo } = require('../../base/07-deses-arr')

describe('Pruebas en desestructuración', () => {
    test('Debe de retornar un string y un numero', () => {
        const [letras, numeros] = retornaArreglo();
        //expect(arr).toEqual(['ABC', 123]);

        expect(letras).toEqual('ABC');
        expect(typeof letras).toEqual('string');
        
        expect(numeros).toEqual(123);
        expect(typeof numeros).toEqual('number');
    })
})
