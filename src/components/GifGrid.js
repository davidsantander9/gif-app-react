import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]); 

    useEffect( () => {
        getGifs();
    }, []);
    // Ese arreglo es el component did mount

    const getGifs = async() => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=z8L84cRhMVVOIbQuduH0R8OxY88PESaX`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        setImages( gifs );
        
    }


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
