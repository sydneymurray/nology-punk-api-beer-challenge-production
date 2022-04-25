import React from 'react'
import "./Beer.scss"

const Beer = ({beer, setSelectedBeer}) => {
    const {id, name, tagline, description, image_url, abv, ingredients, food_pairing} = beer

    return <>
        <article className="beer" onClick={() => setSelectedBeer(beer)}>
            <h2 className="beer__name">{name}</h2>
            <img className="beer__image" src={image_url} alt={name} />
            <h3 className="beer__tagline">{tagline}</h3>
            <h4 className="beer__abv">Alcohol by Volume: {abv}%</h4>
        </article>    
    </>
}

export default Beer

