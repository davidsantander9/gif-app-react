import useFetchGifs from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('useFetchGifs test', () => {
    test('should return initial state', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One punch') );  
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
        
    });

    test('should return array of 10 iamges and loading false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One punch') );  
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe( false );
    });
    
    
});