import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('<GifExpertApp/>  test', () => {

    test('should correctly display the component', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect( wrapper ).toMatchSnapshot();
    });    

    test('should display a list of categories', () => {
        const categories = ['Batman', "Halo"];
        const wrapper = shallow(<GifExpertApp defaultCategories = { categories } />);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
});