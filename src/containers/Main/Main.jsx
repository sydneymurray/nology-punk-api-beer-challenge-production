import React from 'react'
import Beer from '../../components/beer/Beer'
import "./Main.scss"

const Main = ({beers, setSelectedBeer}) => {
    const filteredBeers = beers

    return <>
        <section className="main-container">
            {filteredBeers.map((beer, index) => <Beer key={index} beer={beer} 
                setSelectedBeer={setSelectedBeer}/>)}
        </section>
    </>
}

export default Main