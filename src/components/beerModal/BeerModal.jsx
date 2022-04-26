import React from 'react'
import "./BeerModal.scss"
import Ingredients from '../ingredients/Ingredients'

export const BeerModal = ({selectedBeer, setSelectedBeer}) => {
    const {id, name, tagline, description, image_url, abv, ibu, ebc, ph, ingredients, food_pairing, brewers_tips} = selectedBeer

    return <>
        <div className="beer-modal-background" onClick={() => setSelectedBeer(null)}>
            <article className="beer-modal">
                <img className="beer-image" src={image_url} alt={name}/>
                <div className="customer-info">
                    <h1 className="customer-info__heading">{name}</h1>
                    <h2 className="customer-info__tagline"><em>{tagline}</em></h2>
                    <p className="customer-info__desc">{description}</p>
                    <h2 className="customer-info__food-heading">Deliciously complements dishes containing...</h2>
                    <ul className="customer-info__food-list">
                        {food_pairing.map((dish, index) => <li key={index} className="customer-info__food-li">{dish}</li>)}
                    </ul>
                </div>
                <div className="brewery-info">
                    <h1 className="brewery-info__heading">Brewers Information</h1>
                    <h2 className="customer-info__alcohol">Alcohol by Volume: {abv}%</h2>
                    <p className="brewery-info__tips"><em><b>Tips: </b>{brewers_tips}</em></p>
                    <div className="brewery-info__container">
                        <div className="brewery-info-column">
                            <h2 className="brewery-info-column__ingredients-heading">Malts</h2>
                            <ul className="brewery-info__list">
                                {ingredients.malt.map((malt, index) => <li key={index} className="brewery-info-column__li">
                                    {malt.name} {malt.amount.value}kg</li>)}
                            </ul>
                        </div>
                        <div className="brewery-info-column">
                            <h2 className="brewery-info-column__ingredients-heading">Hops</h2>
                            <ul className="brewery-info__list">
                                {ingredients.hops.map((hops, index) => <li key={index}className="brewery-info-column__li-hops">
                                    {hops.name} {hops.amount.value}kg</li>)}
                            </ul>
                        </div>
                        <div className="brewery-info-column">
                            <h2 className="brewery-info-column__ingredients-heading">Attributes</h2>
                            <ul className="brewery-info__list">
                                <li className="brewery-info-column__li-attributes">ABV {abv}%</li>
                                <li className="brewery-info-column__li-attributes">IBU {ibu}</li>
                                <li className="brewery-info-column__li-attributes">EBC {ebc}</li>
                                <li className="brewery-info-column__li-attributes">pH {ph}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </>
}



