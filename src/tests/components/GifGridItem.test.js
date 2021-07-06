import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('<GifGridItem/>  test', () => {

    const title = 'Title';
    const url = 'http//localhost/algo.jpg';

    test('should correctly display the component', () => {
        const wrapper = shallow(<GifGridItem title={ title } url={ url } />);
        expect( wrapper ).toMatchSnapshot();
    });
    


});