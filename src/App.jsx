import {useState, useEffect} from 'react';
import './App.scss';
import { BeerModal } from './components/beerModal/BeerModal';
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
    let fetchPageNumber = 0
    let allBeers = []

    const getBeers = () => {
        fetchPageNumber++
        if (fetchPageNumber === 20 ) {
            let beersSet = new Set (allBeers)
            setBeers(Array.from(beersSet))
        }
        if (fetchPageNumber > 20) return
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
            <SideBar searchText={searchText} setSearchText={setSearchText}
                showHighABV={showHighABV} setShowHighABV={setShowHighABV}
                showClassic={showClassic} setShowClassic={setShowClassic}
                showAcidity={showAcidity} setShowAcidity={setShowAcidity}/>

            <Main beers={beers} searchText={searchText} setSearchText={setSearchText} 
                showHighABV={showHighABV} showClassic={showClassic} showAcidity={showAcidity} 
                selectedBeer={selectedBeer} setSelectedBeer={setSelectedBeer}/>

            {selectedBeer && <BeerModal selectedBeer={selectedBeer} setSelectedBeer={setSelectedBeer}/>}

        </div>
    </>
}

export default App;

/*
    let beersSet = new Set (beers)
    setBeers(Array.from(beersSet)
*/
