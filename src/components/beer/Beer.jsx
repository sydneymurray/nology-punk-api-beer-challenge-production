import React from 'react'
import "./Beer.scss"
import blackBottle from "../../images/Empty-Bottle.webp"

const Beer = ({beer, setSelectedBeer}) => {
    const {name, tagline, image_url, abv} = beer

    return <>
        <article className="beer" onClick={() => setSelectedBeer(beer)}>
            <h2 className="beer__name">{name}</h2>
            <img className="beer__image" src={image_url ? image_url : blackBottle} alt={name} />
            <h3 className="beer__tagline"><em>{tagline}</em></h3>
            <h4 className="beer__abv">Alcohol by Volume: {abv}%</h4>
        </article>    
    </>
}

export default Beer


