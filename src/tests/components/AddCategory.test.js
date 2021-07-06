import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('<AddCategory/>  test', () => {

    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={ setCategories } />);

    test('should correctly display the component', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should change input text', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'; 
        input.simulate('change', { target:{ value } });
        expect(  wrapper.find('p').text().trim()  ).toBe(value);
    })
    
    
});