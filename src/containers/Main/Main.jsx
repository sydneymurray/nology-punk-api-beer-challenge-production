import React from 'react'
import Beer from '../../components/beer/Beer'
import "./Main.scss"

const Main = ({beers}) => {

    return <>
        <section className="main-container">
            {beers.map((beer, index) => <Beer key={index} beer={beer}/>)}
        </section>
    </>
}

export default Main