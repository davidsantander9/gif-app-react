import { getGifs } from '../../helpers/getGifs';

describe('test with getGifts Fetch', () => {

    test('should fetch 10 elements', async() => {
        const gifs = await getGifs('Dragon Ball');

        expect( gifs.length ).toBe( 10 );
    });

    test('should return a empty array', async() => {
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
    });
    
    
});