import React from 'react'
import Beer from '../../components/beer/Beer'
import "./Main.scss"

const Main = ({beers, searchText, setSearchText, setSelectedBeer, showHighABV, showClassic, showAcidity}) => {
    const filteredBeers = beers.map(beer => {
        let returnBeer = true
        
        if (showHighABV && !beer.abv) returnBeer = false
        if (showAcidity && !beer.ph) returnBeer = false
        if (searchText && !beer.name.includes(searchText)) returnBeer = false 

        return returnBeer
    })

    return <>
        <section className="main-container">
            {filteredBeers.map((beer, index) => <Beer key={index} beer={beer} 
                setSelectedBeer={setSelectedBeer}/>)}
        </section>
    </>
}

export default Main

