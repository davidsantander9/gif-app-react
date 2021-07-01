import React, { useState } from 'react'

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon ball'];
    const [categories , setCatergories ] = useState(['One Punch', 'Samurai X', 'Dragon ball']);

    const handleAdd = () => {
        // setCatergories( cats => [...cats, 'Naruto']);
        setCatergories([...categories, 'Naruto'])
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <button onClick={ handleAdd }>Agregar</button>
            
            <ol>
                {
                    categories.map( category =>  { return <li key={ category }>{ category }</li> } )
                }
            </ol>
        </>
    )
}

export default GifExpertApp
