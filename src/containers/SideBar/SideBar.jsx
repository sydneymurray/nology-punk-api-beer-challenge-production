import React from 'react'
import "./SideBar.scss"

const SideBar = (props) => {
    const {displayedBeers, searchText, setSearchText, showHighABV, setShowHighABV, showClassic, setShowClassic, showAcidity, setShowAcidity} = props

    const handleInput = (event) => {
        setSearchText(event.target.value)
    }

    return <>
        <section className="sidebar-container">
            <div className="options-heading">
                <h2>Search:</h2>
                <input type="text" value={searchText} onInput={handleInput}/>
            </div>
            <div className="options">
                <h3 className="options__label">High ABV &gt; 6%</h3>
                <input className="options__input" type="checkbox" checked={showHighABV} onChange={() => setShowHighABV(!showHighABV)}/>
            </div>
            <div className="options">
                <h3 className="options__label">Classic Range</h3>
                <input className="options__input" type="checkbox" checked={showClassic} onChange={() => setShowClassic(!showClassic)}/>
            </div>
            <div className="options">
                <h3 className="options__label">Acidity PH &lt; 4</h3>
                <input className="options__input" type="checkbox" checked={showAcidity} onChange={() => setShowAcidity(!showAcidity)}/>
            </div>
            <h3 className="sidebar-container__h3">{displayedBeers} beers found</h3>

        </section>
    </>
}

export default SideBar

