import React from 'react'
import Ingredients from '../ingredients/Ingredients'
import "./Beer.scss"

const Beer = ({beer}) => {
    const {id, name, tagline, description, image_url, abv, ingredients, food_pairing} = beer

    let ingredientsList = null
    if (ingredients.length > 0) 
        ingredientsList = ingredients.map((ingredient, index) => <Ingredients ingredient={ingredient} key={index}/>)
    else 
        ingredientsList ="" 

    const handleClick = () => {
        console.log("Article Clicked")
    }

    return <>
        <article className="beer" onClick={handleClick}>
            <h2 className="beer__name">{name}</h2>
            <img className="beer__image" src={image_url} alt={name} />
            <h3 className="beer__tagline">{tagline}</h3>
            <h4 className="beer__abv">Alcohol by Volume: {abv}%</h4>
        </article>    
    </>
}

export default Beer

/*

        <article className="beer" onClick={handleClick}>
            <h2 className="beer__name">{name}</h2>
            <h3 className="beer__tagline">{tagline}</h3>
            <img className="beer__image" src={image_url} alt={name} />
            <p className="beer__desc">{description}</p>
            <p className="beer__abv">{abv}</p>
            <p className="beer__ingredients">{ingredientsList}</p>
            <p className="beer__food_pairing">{food_pairing}</p>
        </article>    


*/