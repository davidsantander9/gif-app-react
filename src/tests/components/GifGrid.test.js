import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('<GifGrid/>  test', () => {

    const category = 'Batman';

    test('should correctly display the component <GifGrid/>', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true 
        });
        const wrapper = shallow(<GifGrid category={ category } />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('should show when loads images', () => {
        const gifs = [{
            id: 'avas',
            url: 'https://localhost/cosa.png',
            title: 'A thing'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false 
        });

        const wrapper = shallow(<GifGrid category={ category } />);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    });
    
    
});