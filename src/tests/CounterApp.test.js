import React from 'react';
import { shallow } from 'enzyme';

const { default: CounterApp } = require("../CounterApp");

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);

    // Reinicializando los valores
    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe de mostrar <CounterApp /> correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100} />);
        const valExpect = wrapper.find('h2').text().trim();
        expect(valExpect).toBe('100');
    });

    test('Debe de incrementar el contador con el botón de +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const valExpect = wrapper.find('h2').text().trim();
        expect(valExpect).toBe('11');
    });
    
    test('Debe de reducir el contador con el botón de -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const valExpect = wrapper.find('h2').text().trim();
        expect(valExpect).toBe('9');
    });
    
    test('Debe de colocar el valor por defecto con el btn reset', () => {
        const wrapper = shallow(<CounterApp value={105} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const valExpect = wrapper.find('h2').text().trim();
        expect(valExpect).toBe('105');
    });
    

})
