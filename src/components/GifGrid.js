import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
        <h3 className='animate__animated animate__flash animate__delay-1s'>{ category }</h3>

        { loading && <p>Loading</p> }

        <div className='card-grid'>
                {
                    images.map( (img) => {
                        return <GifGridItem 
                                key={img.id} 
                                { ...img }//Enviamos todod como props
                                />
                    })
                }
        </div>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};


export default GifGrid;
