const { getUser, getUsuarioActivo } = require('../../base/05-funciones');

describe('Pruebas de funciones', () => {
    test('getUser, Debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo, Debe de retornar un objeto', () => {
        const nombre = 'Carlos';
        const userTest = {
            uid: 'ABC567',
            username: nombre
        };

        const user = getUsuarioActivo(nombre);
        expect(user).toEqual(userTest);
    })
})