import React from 'react';
import { shallow } from 'enzyme';

// const { render } = require("@testing-library/react");
const { default: PrimeraApp } = require("../PrimeraApp");

describe('Pruebas en <PrimeraApp />', () => {
    /* test('Debe de mostrar el mensaje "Hola mundo"', () => {
        const saludo = 'Hola mundo';
        const {getByText} = render( <PrimeraApp saludo={saludo} /> );

        expect(getByText(saludo)).toBeInTheDocument();
    }) */

    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola mundo';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola mundo';
        const subtitulo = 'Aquí va el subtitulo';
        const wrapper =
            shallow(
                <PrimeraApp
                    saludo={saludo}
                    subtitulo={subtitulo}
                />
            );

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    });



})
