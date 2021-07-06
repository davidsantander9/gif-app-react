import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('<AddCategory/>  test', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    });

    test('should correctly display the component', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should change input text', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'; 
        input.simulate('change', { target:{ value } });
        expect(  wrapper.find('p').text().trim()  ).toBe(value);
    });
    
    test('should not post the info', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('should call function setCategories clear the value', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'; 
        input.simulate('change', { target:{ value } });
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(  wrapper.find('p').text().trim()  ).toBe('');
        expect( setCategories ).toHaveBeenCalled();
    });
    
    
}); 