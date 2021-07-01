import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]); 

    useEffect( () => {
        getGifs(category)
        .then(setImages)
    }, [category]);
    // Ese arreglo es el component did mount

    return (
        <>
        <h3 className='animate__animated animate__flash animate__delay-1s'>{ category }</h3>
        <div className='card-grid'>
                {
                    images.map( (img) => {
                        return <GifGridItem 
                                key={img.id} 
                                { ...img }
                                />
                    })
                }
        </div>
        </>
    )
}

export default GifGrid;
