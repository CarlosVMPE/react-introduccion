const { getHeroeById, getHeroesByOwner } = require('../../base/08-imp-exp');
const { default: heroes } = require('../../data/heroes');

describe('Pruebas en funciones de héroes', () => {
    test('Debe de retornar un héroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
    })

    test('Debe de retornar undefined, si el heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBeUndefined();
    });

    test('Debe de retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroes).toEqual(heroesData);
    });
    
    test('Debe de retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroes.length).toBe(heroesData.length);
    });


});