import React from 'react'
import Beer from '../../components/beer/Beer'
import "./Main.scss"

const Main = ({beers}) => {
    const filteredBeers = beers
    return <>
        <section className="main-container">
            {filteredBeers.map((beer, index) => <Beer key={index} beer={beer}/>)}
        </section>
    </>
}

export default Main