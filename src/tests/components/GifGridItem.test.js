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
    });

    test('should have the image with url and alt same as props', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('should have animate__fadeIn class', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes('animate__fadeIn') ).toBe(true);
    })
    

});