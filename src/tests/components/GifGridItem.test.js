import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('<GifGridItem/>  test', () => {

    const title = 'Title';
    const url = 'http//localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

    test('should correctly display the component', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should have a paragraph with the title', () => {
        const p =  wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })
    


});