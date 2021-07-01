import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({title, url}) => {
    return (
        <div className="card animate__animated animate__fadeIn animate__delay-1s">
            <p>{title}</p>
            <img src={url} alt={title}/>
        </div>
    )
}

GifGridItem.protoTypes = {
    title: PropTypes.string.isRequired,
    url:   PropTypes.string.isRequired,
}

export default GifGridItem;
