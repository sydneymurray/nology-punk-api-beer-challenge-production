import React from 'react'
import "./BeerModal.scss"
import Ingredients from '../ingredients/Ingredients'

export const BeerModal = ({selectedBeer, setSelectedBeer}) => {
    const {id, name, tagline, description, image_url, abv, ibu, ebc, ph, ingredients, food_pairing, brewers_tips} = selectedBeer

    let ingredientsList = null
    if (ingredients.length > 0) 
        ingredientsList = ingredients.map((ingredient, index) => <Ingredients ingredient={ingredient} key={index}/>)
    else 
        ingredientsList ="" 


    return <>
        <div className="beer-modal-background" onClick={() => setSelectedBeer(null)}>
            <article className="beer-modal">
                <img className="beer-image" src={image_url} alt={name}/>
                <div className="customer-info">
                    <h1 className="customer-info__heading">{name}</h1>
                    <h2 className="customer-info__tagline">{tagline}</h2>
                    <p className="customer-info__desc">{description}</p>
                    <h2 className="customer-info__food-heading">Complements dishes with...</h2>
                    <ul className="customer-info__food-list">
                        {food_pairing.map(dish => <li className="customer-info__food-li">{dish}</li>)}
                    </ul>
                </div>
                <div className="brewery-info">
                    <h1 className="brewery-info__heading">Brewers Information</h1>
                    <h2 className="customer-info__alcohol">Alcohol by Volume: {abv}%</h2>
                    <p2 className="brewery-info__tips"><b>Tips: </b>{brewers_tips}</p2>
                    <h2 className="brewery-info__ingredients-heading">Malts</h2>
                    <ul className="brewery-info__list">
                        {ingredients.malt.map(malt => <li className="brewery-info__li">
                            {malt.name} {malt.amount.value}kg</li>)}
                    </ul>
                    <h2 className="brewery-info__ingredients-heading">Hops</h2>
                    <ul className="brewery-info__list">
                        {ingredients.hops.map(hops => <li className="brewery-info__li">
                            {hops.name} {hops.amount.value}kg</li>)}
                    </ul>
                    <h2 className="brewery-info__ingredients-heading">Attributes</h2>
                    <ul className="brewery-info__list">
                        <li className="brewery-info__li">ABV {abv}%</li>
                        <li className="brewery-info__li">IBU {ibu}</li>
                        <li className="brewery-info__li">EBC {ebc}</li>
                        <li className="brewery-info__li">pH {ph}</li>
                    </ul>

                </div>
            </article>
        </div>
    </>
}


