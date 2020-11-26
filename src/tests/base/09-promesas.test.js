const { getHeroeByIdAsync } = require('../../base/09-promesas');
const { default: heroes } = require('../../data/heroes');

describe('Pruebas con promesas', () => {
    test('Debe de retornar un héroe async', ( done ) => {
      const id = 1;
        getHeroeByIdAsync(id)
            .then( heroe => {
               expect( heroe ).toBe(heroes[0]) ;
               done();
            });
    });
    
    test('Debe de obtener un error si el heré por id no existe', ( done ) => {
      const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
})
