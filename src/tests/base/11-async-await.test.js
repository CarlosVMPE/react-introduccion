const { getImagen } = require('../../base/11-async-await');

describe('Pruebas con asyn-await y fetch', () => {
    test('Debe de retornar el url de la imagen', async () => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    })

})
