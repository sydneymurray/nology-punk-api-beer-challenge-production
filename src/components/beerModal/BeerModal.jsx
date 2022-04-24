import React from 'react'
import "./BeerModal.scss"
import Ingredients from '../ingredients/Ingredients'

export const BeerModal = ({selectedBeer, setSelectedBeer}) => {
    const {id, name, tagline, description, image_url, abv, ingredients, food_pairing} = selectedBeer

    let ingredientsList = null
    if (ingredients.length > 0) 
        ingredientsList = ingredients.map((ingredient, index) => <Ingredients ingredient={ingredient} key={index}/>)
    else 
        ingredientsList ="" 

    const handleClick = () => {
        console.log("Article Clicked")
    }

    return <>
        <div>BeerModal</div>
    </>
}
