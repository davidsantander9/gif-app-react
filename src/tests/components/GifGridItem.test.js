import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('<GifGridItem/>  test', () => {
    test('should correctly display the component', () => {
        const wrapper = shallow(<GifGridItem/>);
        expect( wrapper ).toMatchSnapshot();
    })
    
});