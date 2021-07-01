import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs(category)
        .then( imgs => {
            setState({
                data: imgs,
                loading: false
            })
        }

        ) 
    }, [category]); // Ese arreglo es el component did mount

    return state;
}

export default useFetchGifs;
