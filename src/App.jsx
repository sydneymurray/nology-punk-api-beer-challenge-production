
import {useState, useEffect} from 'react';
import './App.scss';
import backToBeersImg from "./images/back-to-beers.svg"
import { BeerModal } from './components/BeerModal/BeerModal';
import Header from './containers/Header/Header';
import Hero from './containers/Hero/Hero';
import Main from './containers/Main/Main';
import SideBar from './containers/SideBar/SideBar';
import beerArray from "./data/data"

const App = () => {
    const [beers, setBeers] = useState([])
    const [selectedBeer, setSelectedBeer] = useState(null)
    const [searchText, setSearchText] = useState("")
    const [showHighABV, setShowHighABV] = useState(false)
    const [showClassic, setShowClassic] = useState(false)
    const [showAcidity, setShowAcidity] = useState(false)
    const [displayedBeers, setDisplayedBeers] = useState(0)
    let fetchPageNumber = 0
    let allBeers = []

    const getBeers = () => {
        fetchPageNumber++
        if (fetchPageNumber === 20 ) setBeers(Array.from(new Set (allBeers)))
        if (fetchPageNumber > 19) return

        fetch("https://api.punkapi.com/v2/beers?page=" + fetchPageNumber)
            .then(resp => resp.json())
            .then(newBeers => {
                allBeers = [...allBeers, ...newBeers]
                setBeers(allBeers)
            })
    }
    useEffect(() => {getBeers()},[]) 
    useEffect(() => {setInterval(() => {getBeers()}, 1000)},[]) 
    
    if (!beers) return

    return <>
        <div className="app-container">
            <Header/>
            <Hero/>
            <SideBar displayedBeers={displayedBeers} searchText={searchText} setSearchText={setSearchText}
                showHighABV={showHighABV} setShowHighABV={setShowHighABV}
                showClassic={showClassic} setShowClassic={setShowClassic}
                showAcidity={showAcidity} setShowAcidity={setShowAcidity}/>

            <Main setDisplayedBeers={setDisplayedBeers} beers={beers} 
                searchText={searchText} setSearchText={setSearchText} 
                showHighABV={showHighABV} showClassic={showClassic} showAcidity={showAcidity} 
                selectedBeer={selectedBeer} setSelectedBeer={setSelectedBeer}/>

            {selectedBeer && <BeerModal selectedBeer={selectedBeer} setSelectedBeer={setSelectedBeer}/>}

            <a href="#the-beers" className="app-container__back-to-beers">
                <img className="back-to-beers-icon" src={backToBeersImg} alt="Back to beers" />
            </a>
        </div>
    </>
}

export default App;

